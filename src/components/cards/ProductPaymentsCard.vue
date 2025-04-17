<template>
  <div>
    <div class="d-flex justify-space-between align-center mb-4">
    </div>

    <div style="overflow-x: auto;">
      <v-table 
        density="comfortable" 
        hide-default-footer 
        class="w-100 bg-cardColor"
        style="min-width: 600px; white-space: nowrap;"
      >
        <thead>
          <tr>
            <th 
              class="text-h6 font-weight-medium"
            >
              Products
            </th>
            <th 
              class="text-h6 font-weight-medium"
            >
              Payment
            </th>
            <th 
              class="text-h6 font-weight-medium"
            >
              Status
            </th>
            <th style="width: 1%;"></th>
          </tr>
        </thead>
        <tbody>
          <tr 
            v-for="(item, index) in products" 
            :key="index"
          >
            <!-- Product -->
            <td 
              class="d-flex align-center ga-3 py-10" 
              style="padding: 12px;"
            >
              <v-avatar size="40">
                <v-img :src="item.image" />
              </v-avatar>
              <div style="flex: 1; min-width: 0;">
                <span
                  class="text-body-2 font-weight-medium d-inline-block"
                  style="
                    white-space: nowrap;
                    overflow: hidden;
                    text-overflow: ellipsis;
                    display: block;
                  "
                >
                  {{ item.name }}
                </span>
              </div>
            </td>

            <!-- Payment -->
            <td style="padding-top: 12px; padding-bottom: 12px;">
              <div class="text-body-2 font-weight-bold">
                ${{ item.paid }}
                <span class="text-disabled">/ {{ item.total }}</span>
              </div>
              <div class="text-caption text-textCard mb-1">
                {{ item.statusText }}
              </div>
              <v-progress-linear
                :color="item.color"
                height="5"
                rounded
                :model-value="(item.paid / item.total) * 100"
                class="mt-1"
                bg-color="grey-lighten-2"
                style="max-width: 140px;"
              />
            </td>

            <!-- Estatus -->
            <td style="padding-top: 12px; padding-bottom: 12px;">
              <v-chip
                size="small"
                variant="outlined"
                class="text-capitalize"
                :class="`text-${item.color}`"
                :style="`border: 1px solid currentColor; background-color: ${getChipBg(item.color)};`"
              >
                {{ item.status }}
              </v-chip>
            </td>

            <!-- Actions menu -->
            <td 
              class="text-right" 
              style="padding-top: 12px; 
              padding-bottom: 12px; 
              white-space: nowrap;"
            >
              <v-menu location="bottom">
                <template #activator="{ props }">
                  <v-btn
                    v-bind="props"
                    icon
                    size="small"
                    variant="text"
                    style="transition: background-color 0.2s ease;"
                    :style="{ backgroundColor: hovered ? 'rgba(100, 100, 100, 0.08)' : '' }"
                    @mouseover="hovered = true"
                    @mouseleave="hovered = false"
                  >
                    <v-icon icon="mdi-dots-vertical" />
                  </v-btn>
                </template>
                <v-list>
                  <v-list-item
                    v-for="action in ['Add', 'Edit', 'Delete']"
                    :key="action"
                    style="transition: background-color 0.2s ease;"
                    :style="{ backgroundColor: hoveredItem === action ? 'rgba(100, 100, 100, 0.12)' : '' }"
                    @mouseover="hoveredItem = action"
                    @mouseleave="hoveredItem = null"
                  >
                    <v-list-item-title>{{ action }}</v-list-item-title>
                  </v-list-item>
                </v-list>
              </v-menu>
            </td>
          </tr>
        </tbody>
      </v-table>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const hovered = ref(false)
const hoveredItem = ref(null)

const getChipBg = (color) => {
  const map = {
    green: 'rgba(76,175,80,0.1)',
    purple: 'rgba(156,39,176,0.1)',
    red: 'rgba(244,67,54,0.1)',
    orange: 'rgba(255,152,0,0.1)'
  }
  return map[color] || 'transparent'
}

const products = [
  {
    name: 'iPhone 13 Pro',
    image: '/src/assets/images/product-5.png',
    paid: 210,
    total: 499,
    statusText: 'Partially paid',
    status: 'Confirmed',
    color: 'purple'
  },
  {
    name: 'Apple MacBook Air',
    image: '/src/assets/images/product-6.png',
    paid: 520,
    total: 499,
    statusText: 'Full paid',
    status: 'Confirmed',
    color: 'green'
  },
  {
    name: 'PlayStation 5',
    image: '/src/assets/images/product-7.png',
    paid: 520,
    total: 499,
    statusText: 'Cancelled',
    status: 'Cancelled',
    color: 'red'
  },
  {
    name: 'Amazon Basics Chair',
    image: '/src/assets/images/product-8.png',
    paid: 210,
    total: 499,
    statusText: 'Partially paid',
    status: 'Confirmed',
    color: 'orange'
  },
  {
    name: 'Sony X85J 75"',
    image: '/src/assets/images/product-9.png',
    paid: 520,
    total: 499,
    statusText: 'Full paid',
    status: 'Confirmed',
    color: 'green'
  }
]
</script>
