<template>
  <div
    :style="{
      display: 'flex',
      gap: '24px',
      flexWrap: 'wrap',
      alignItems: 'stretch',
    }"
  >
    <!-- Left column -->
    <div
      :style="{
        flex: 1,
        minWidth: '300px',
        maxWidth: '400px',
        display: 'flex',
        flexDirection: 'column',
      }"
    >
      <!-- Área local -->
      <div :style="{ marginBottom: '32px' }">
        <h3 :style="{ fontSize: '1rem', fontWeight: '600', marginBottom: '12px' }">
          Local area
        </h3>

        <v-btn 
          prepend-icon="mdi-crosshairs-gps" 
          variant="outlined" 
          class="mb-4"
        >
          Use my location
        </v-btn>

        <v-text-field
          v-model="form.address"
          label="Or, use this address"
          prepend-inner-icon="mdi-magnify"
          hide-details
        />

        <v-slider
          v-model="form.range"
          step="1"
          min="1"
          max="50"
          thumb-label="always"
          class="mt-4"
        />
        <div :style="{ fontSize: '0.8rem', marginTop: '8px' }">
          Range: {{ form.range }} km
        </div>
      </div>

      <!-- Advanced -->
      <div>
        <h3 :style="{ fontSize: '1rem', fontWeight: '600', marginBottom: '12px' }">
          Advanced
        </h3>

        <v-select
          v-model="form.country"
          label="Country"
          :items="countries"
          item-title="label"
          item-value="value"
          multiple
          chips
          closable-chips
          hide-details
          density="comfortable"
        >
          <template #chip="{ item }">
            <v-chip closable>
              {{ abbreviate(item.value) }}
            </v-chip>
          </template>
        </v-select>

        <v-radio-group 
          v-model="form.areaType" 
          class="mt-2"
        >
          <v-radio 
            label="Postcodes list" 
            value="postcodes" 
          />
          <v-radio 
            label="Counties" 
            value="counties" 
          />
          <v-radio 
            label="Towns" 
            value="towns" 
          />
        </v-radio-group>
      </div>
    </div>

    <!-- Map column -->
    <div
      :style="{
        flex: 1,
        minWidth: '300px',
        display: 'flex',
        alignItems: 'stretch',
        justifyContent: 'center',
      }"
    >
      <div
        :style="{
          width: '100%',
          backgroundColor: '#f2f2f2',
          border: '2px dashed #ccc',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          fontWeight: 'bold',
          color: '#999',
          minHeight: '350px',
        }"
      >
        MAP HERE
      </div>
    </div>
  </div>

  <v-card-actions>
    <v-spacer />
    <BaseButton 
      variant="modalCancel" 
      @click="emit('close')"
    >
      Cancel
    </BaseButton>
    <BaseButton 
      variant="modalOk" 
      @click="emit('close', form)"
    >
      OK
    </BaseButton>
  </v-card-actions>
</template>

<script setup>
import { ref } from 'vue'
import {
  VBtn,
  VTextField,
  VSlider,
  VSelect,
  VRadioGroup,
  VRadio
} from 'vuetify/components'

const emit = defineEmits(['close'])

const form = ref({
  address: '',
  range: 5,
  country: [],
  areaType: 'postcodes'
})

const countries = [
  { label: 'United Kingdom', value: 'UK' },
  { label: 'Spain', value: 'Spain' },
  { label: 'France', value: 'France' },
  { label: 'Germany', value: 'Germany' },
  { label: 'Italy', value: 'Italy' }
]

function abbreviate(name) {
  if (name === 'UK') return 'United Kingdom'
  return name
}
</script>
