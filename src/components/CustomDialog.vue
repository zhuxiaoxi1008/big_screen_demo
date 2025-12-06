<!-- src/components/CustomDialog.vue -->
<template>
  <teleport to="body">
    <div v-if="modelValue" class="dialog-overlay" @click="handleOverlayClick">
      <div class="dialog-container" :style="dialogStyle" @click.stop>
        <!-- Dialog Header -->
        <div class="dialog-header">
          <slot name="header">
            <h3 v-if="title" class="dialog-title">{{ title }}</h3>
          </slot>
          <button 
            v-if="showClose" 
            class="dialog-close-button" 
            @click="closeDialog"
            aria-label="Close"
          >
            ×
          </button>
        </div>
        
        <!-- Dialog Content -->
        <div class="dialog-content">
          <slot></slot>
        </div>
        
        <!-- Dialog Footer -->
        <div v-if="$slots.footer" class="dialog-footer">
          <slot name="footer"></slot>
        </div>
      </div>
    </div>
  </teleport>
</template>

<script setup>
import { computed } from 'vue'

const props = defineProps({
  modelValue: {
    type: Boolean,
    default: false
  },
  title: {
    type: String,
    default: ''
  },
  width: {
    type: [String, Number],
    default: '500px'
  },
  height: {
    type: [String, Number],
    default: 'auto'
  },
  showClose: {
    type: Boolean,
    default: true
  },
  closeOnClickOverlay: {
    type: Boolean,
    default: true
  }
})

const emit = defineEmits(['update:modelValue'])

const dialogStyle = computed(() => {
  return {
    width: typeof props.width === 'number' ? `${props.width}px` : props.width,
    height: typeof props.height === 'number' ? `${props.height}px` : props.height
  }
})

const closeDialog = () => {
  emit('update:modelValue', false)
}

const handleOverlayClick = () => {
  if (props.closeOnClickOverlay) {
    closeDialog()
  }
}

// Allow closing with ESC key
import { onMounted, onUnmounted } from 'vue'

const handleEscKey = (event) => {
  if (event.key === 'Escape' && props.modelValue) {
    closeDialog()
  }
}

onMounted(() => {
  document.addEventListener('keydown', handleEscKey)
})

onUnmounted(() => {
  document.removeEventListener('keydown', handleEscKey)
})
</script>

<style scoped>
.dialog-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.7);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 2000;
  backdrop-filter: blur(2px);
}

.dialog-container {
  background: linear-gradient(135deg, #1a2a3a, #0d1b2a);
  border-radius: 12px;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.5);
  display: flex;
  flex-direction: column;
  max-height: 90vh;
  overflow: hidden;
  border: 1px solid rgba(92, 217, 232, 0.3);
  backdrop-filter: blur(10px);
}

.dialog-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px 24px;
  border-bottom: 1px solid rgba(92, 217, 232, 0.2);
  background: rgba(13, 27, 42, 0.7);
}

.dialog-title {
  margin: 0;
  font-size: 20px;
  font-weight: 600;
  color: #5cd9e8;
  text-shadow: 0 0 8px rgba(92, 217, 232, 0.5);
}

.dialog-close-button {
  background: none;
  border: 1px solid rgba(92, 217, 232, 0.3);
  font-size: 24px;
  cursor: pointer;
  color: #5cd9e8;
  padding: 0;
  width: 36px;
  height: 36px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  transition: all 0.3s ease;
  background: rgba(13, 27, 42, 0.5);
}

.dialog-close-button:hover {
  background: rgba(92, 217, 232, 0.2);
  color: #fff;
  transform: rotate(90deg);
  box-shadow: 0 0 12px rgba(92, 217, 232, 0.4);
}

.dialog-content {
  padding: 24px;
  flex: 1;
  overflow-y: auto;
  color: #e0f7fa;
  font-size: 16px;
  line-height: 1.6;
}

.dialog-footer {
  padding: 20px 24px;
  border-top: 1px solid rgba(92, 217, 232, 0.2);
  display: flex;
  justify-content: flex-end;
  gap: 16px;
  background: rgba(13, 27, 42, 0.5);
}

/* Scrollbar styling for dark theme */
.dialog-content::-webkit-scrollbar {
  width: 8px;
}

.dialog-content::-webkit-scrollbar-track {
  background: rgba(13, 27, 42, 0.3);
  border-radius: 4px;
}

.dialog-content::-webkit-scrollbar-thumb {
  background: rgba(92, 217, 232, 0.5);
  border-radius: 4px;
}

.dialog-content::-webkit-scrollbar-thumb:hover {
  background: rgba(92, 217, 232, 0.8);
}

/* Responsive design for big screens */
@media (min-width: 1920px) {
  .dialog-title {
    font-size: 24px;
  }
  
  .dialog-content {
    font-size: 18px;
  }
  
  .dialog-close-button {
    width: 40px;
    height: 40px;
    font-size: 28px;
  }
}
</style>