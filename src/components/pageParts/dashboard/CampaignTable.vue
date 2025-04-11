<template>
  <v-card 
    class="mb-6 rounded-lg"  
    :color="cardColor"
  >
    <v-data-table
      :headers="headers"
      :items="rows"
      class="elevation-0 rounded-lg custom-table"
      :hide-default-footer="true"
      :item-value="() => ''"
      density="comfortable"
    >
      <!-- Icon for the type -->
      <template #[`item.type`]="{ item }">
        <v-icon size="20">
          {{ item.type === 'email' ? 'mdi-email' : 'mdi-cellphone' }}
        </v-icon>
      </template>

      <!-- Action buttons -->
      <template #[`item.action`]="{ item }">
        <div class="d-flex gap-2">
          <v-btn
            v-if="variant === 'validate'"
            color="info"
            size="small"
            prepend-icon="mdi-format-list-bulleted"
            class="text-white"
            @click="console.log(item)"
          >
            Resume
          </v-btn>

          <v-btn
            v-if="variant === 'scheduled'"
            color="info"
            size="small"
            prepend-icon="mdi-calendar-edit"
            class="text-white"
          >
            Reschedule
          </v-btn>

          <v-btn
            v-if="variant === 'past'"
            color="info"
            size="small"
            prepend-icon="mdi-download"
            class="text-white"
          >
            Report
          </v-btn>

          <v-btn
            v-if="variant === 'past'"
            color="success"
            variant="outlined"
            size="small"
            prepend-icon="mdi-reload"
          >
            Resend
          </v-btn>

          <v-btn
            v-if="variant !== 'past'"
            color="error"
            size="small"
            prepend-icon="mdi-trash-can"
            class="text-white"
          >
            Cancel
          </v-btn>
        </div>
      </template>
    </v-data-table>
  </v-card>
</template>

<script setup>
import { computed } from 'vue'
import { useTheme } from 'vuetify'

const props = defineProps({
  variant: {
    type: String,
    default: 'validate',
  },
  rows: {
    type: Array,
    default: () => [],
  },
})

const headers = computed(() => {
  if (props.variant === 'validate') {
    return [
      { title: 'Campaign name', key: 'name' },
      { title: 'Type', key: 'type' },
      { title: 'Step', key: 'step' },
      { title: 'Action', key: 'action', sortable: false },
    ]
  } else {
    return [
      { title: 'Campaign name', key: 'name' },
      { title: 'Schedule', key: 'schedule' },
      { title: 'Type', key: 'type' },
      { title: 'Volume', key: 'volume' },
      { title: 'Price', key: 'price' },
      { title: 'Action', key: 'action', sortable: false },
    ]
  }
})

const { current } = useTheme()

const cardColor = computed(() => (current.value.dark ? '#0F2942' : '#DFEFF9'))
</script>

<style scoped>
/* Table header */
.custom-table .v-data-table-header th {
  background-color: #2C3D91;
  color: white;
  font-weight: 600;
  font-size: 14px;
  text-transform: none;
  padding: 12px;
}

.custom-table .v-data-table-header th:first-child {
  border-top-left-radius: 8px;
}
.custom-table .v-data-table-header th:last-child {
  border-top-right-radius: 8px;
}

.custom-table td {
  font-size: 14px;
  color: #111D2D;
  padding: 12px;
}

.custom-table table {
  border-collapse: separate;
  border-spacing: 0;
}

.v-btn {
  margin-right: 6px;
}

</style>
