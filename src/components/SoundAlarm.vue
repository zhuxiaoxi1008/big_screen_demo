<!-- src/components/SoundAlarm.vue -->
<template>
  <div class="sos-alarm" :class="{ 'is-active': isPlaying }" v-show="isPlaying">
    <div class="sos-indicator" @click="toggleAlarm">
      <div class="sos-icon-wrapper">
        <div class="sos-icon" :class="{ 'pulse': isPlaying }">
          <span class="sos-text">SOS</span>
        </div>
      </div>
    </div>
    
    <audio ref="alarmAudio" loop>
      <source :src="bee" type="audio/mpeg">
    </audio>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import bee from "@/assets/mp3/bee.mp3"

const props = defineProps({
  autoPlay: {
    type: Boolean,
    default: false
  },
  volume: {
    type: Number,
    default: 0.8
  }
})

const emit = defineEmits(['play', 'stop'])

const isPlaying = ref(false)
const alarmAudio = ref(null)

const playAlarm = () => {
  // Don't play if already playing
  if (isPlaying.value) {
    return;
  }
  
  if (alarmAudio.value) {
    alarmAudio.value.volume = props.volume;
    alarmAudio.value.play()
      .then(() => {
        isPlaying.value = true;
        emit('play');
      })
      .catch(error => {
        console.warn('Failed to play alarm sound:', error);
        // Fallback to beep if audio fails
        startBeepFallback();
      });
  } else {
    // Fallback to beep if audio element is not available
    startBeepFallback();
  }
};

const stopAlarm = () => {
  // Don't stop if already stopped
  if (!isPlaying.value) {
    return;
  }
  
  if (alarmAudio.value) {
    alarmAudio.value.pause();
    alarmAudio.value.currentTime = 0;
  }
  isPlaying.value = false;
  stopBeepFallback();
  emit('stop');
};

const toggleAlarm = () => {
  if (isPlaying.value) {
    stopAlarm();
  } else {
    playAlarm();
  }
};

// Fallback beep implementation using Web Audio API
let beepIntervalId = null

const playBeep = () => {
  try {
    const audioCtx = new (window.AudioContext || window.webkitAudioContext)()
    const oscillator = audioCtx.createOscillator()
    const gainNode = audioCtx.createGain()
    
    oscillator.connect(gainNode)
    gainNode.connect(audioCtx.destination)
    
    oscillator.type = 'sine'
    oscillator.frequency.value = 880 // A5 note
    gainNode.gain.value = 0.3
    
    oscillator.start()
    
    // Stop after 0.5 seconds
    setTimeout(() => {
      oscillator.stop()
    }, 500)
  } catch (error) {
    console.error('Web Audio API not supported:', error)
  }
}

const startBeepFallback = () => {
  if (!beepIntervalId) {
    isPlaying.value = true
    playBeep()
    beepIntervalId = setInterval(() => {
      playBeep()
    }, 1000)
  }
}

const stopBeepFallback = () => {
  if (beepIntervalId) {
    clearInterval(beepIntervalId)
    beepIntervalId = null
  }
}

// Handle auto-play
onMounted(() => {
  if (props.autoPlay) {
    playAlarm()
  }
})

// Cleanup when component is destroyed
onUnmounted(() => {
  stopAlarm()
  stopBeepFallback()
})

// Expose methods for parent components
defineExpose({
  play: playAlarm,
  stop: stopAlarm,
  toggle: toggleAlarm
})
</script>

<style scoped>
.sos-alarm {
  position: fixed;
  bottom: 30px;
  right: 30px;
  z-index: 1000;
}

.sos-indicator {
  display: flex;
  flex-direction: column;
  align-items: center;
  cursor: pointer;
  user-select: none;
  transition: all 0.3s ease;
}

.sos-icon-wrapper {
  width: 70px;
  height: 70px;
  border-radius: 50%;
  background: linear-gradient(135deg, #ff4757, #ff6b81);
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 4px 20px rgba(255, 71, 87, 0.4);
  border: 3px solid #fff;
  transition: all 0.3s ease;
}

.sos-alarm.is-active .sos-icon-wrapper {
  background: linear-gradient(135deg, #ff6b81, #ff4757);
  box-shadow: 0 0 30px rgba(255, 71, 87, 0.8);
}

.sos-icon {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
}

.sos-text {
  font-size: 20px;
  font-weight: bold;
  color: white;
  font-family: Arial, sans-serif;
}

.sos-icon.pulse {
  animation: pulse 1.5s infinite;
}

@keyframes pulse {
  0% {
    transform: scale(1);
    opacity: 1;
  }
  50% {
    transform: scale(1.1);
    opacity: 0.7;
  }
  100% {
    transform: scale(1);
    opacity: 1;
  }
}

.sos-label {
  margin-top: 10px;
  color: #fff;
  font-size: 14px;
  font-weight: 500;
  background: rgba(0, 0, 0, 0.6);
  padding: 4px 12px;
  border-radius: 15px;
  backdrop-filter: blur(5px);
}

.sos-indicator:hover .sos-icon-wrapper {
  transform: scale(1.05);
  box-shadow: 0 6px 25px rgba(255, 71, 87, 0.6);
}

.sos-indicator:active .sos-icon-wrapper {
  transform: scale(0.95);
}
</style>