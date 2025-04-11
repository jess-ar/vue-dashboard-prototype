<template>
  <div
    :style="{
      display: 'flex',
      flexDirection: 'column',
      gap: '24px',
      padding: '24px'
    }"
  >
    <div
      v-for="(row, index) in mappings"
      :key="index"
      :style="{
        display: 'flex',
        alignItems: 'center',
        gap: '12px'
      }"
    >
      <v-select
        v-model="row.column"
        :items="columnsFromFile"
        label="Column from the file"
        variant="outlined"
        density="comfortable"
        hide-details
        style="flex: 1"
      />

      <span style="font-size: 1.5rem"> → </span>

      <v-select
        v-model="row.mapping"
        :items="mappingTargets"
        label="Mapping to"
        variant="outlined"
        density="comfortable"
        hide-details
        style="flex: 1"
      />
    </div>

    <div :style="{ fontSize: '0.95rem', marginTop: '16px' }">
      <strong>Volume found:</strong> 14 237 contacts
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
        @click="emit('close', mappings)"
      >
        OK
      </BaseButton>
    </v-card-actions>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import BaseButton from '@/components/common/BaseButton.vue'
import { VSelect, VCardActions, VSpacer } from 'vuetify/components'

const emit = defineEmits(['close'])

const columnsFromFile = ['NumTelCli', 'PrenomCli', 'NomCli']
const mappingTargets = ['Phone', 'Firstname', 'Lastname']

const mappings = ref([
  { column: 'NumTelCli', mapping: 'Phone' },
  { column: 'PrenomCli', mapping: 'Firstname' },
  { column: 'NomCli', mapping: 'Lastname' }
])
</script>
