<template>
  <StepLayout
    current-step="audience"
    :show-steps="true"
    back-label="Back to dashboard"
    back-variant="return"
    next-label="Step 2 – Visuals"
    next-variant="step2"
    :next-disabled="false"
    @back="goBack"
    @next="goToVisuals"
  >
    <div style="max-width: 1140px; margin: 0 auto; padding: 30px 16px">
      <!-- Back -->
      <div style="margin-bottom: 24px; text-align: left">
        <BaseButton
          variant="backSmall"
          @click="router.push(ROUTES.AUDIENCE_FILTERS)"
        >
          Back
        </BaseButton>
      </div>

      <!-- Bloques: Labels + SMS + Email -->
      <div
        style="
          display: flex;
          flex-wrap: wrap;
          gap: 40px;
          align-items: flex-start;
          justify-content: center;
        "
      >
        <!-- Labels -->
        <div
          style="
            display: flex;
            flex-direction: column;
            justify-content: flex-start;
            gap: 24px;
            margin-top: 230px;
            color: var(--textColor);
          "
        >
          <label>People Database</label>
          <label>Cost</label>
        </div>

        <!-- SMS Block -->
        <div
          style="
            display: flex;
            flex-direction: column;
            align-items: center;
            gap: 24px;
            min-width: 180px;
          "
        >
          <div
            style="
              display: flex;
              flex-direction: column;
              align-items: center;
              justify-content: center;
              padding: 24px;
              border: 3px solid #529bc5;
              border-radius: 8px;
              width: 150px;
              height: 200px;
            "
          >
            <img 
              :src="smsIcon" 
              alt="SMS icon" 
              style="width: 60px" 
            >
            <p 
              style="margin-top: 16px"
            >
              SMS
            </p>
          </div>

          <div style="display: flex; flex-direction: column; gap: 14px">
            <div style="display: flex; align-items: center; gap: 6px">
              <input
                :value="smsContacts"
                readonly
                style="
                  width: 100px;
                  padding: 6px 10px;
                  border: 2px solid black;
                  border-radius: 4px;
                "
              >
              <span>contacts</span>
            </div>
            <div style="display: flex; align-items: center; gap: 6px">
              <input
                :value="smsCost"
                readonly
                style="
                  width: 100px;
                  padding: 6px 10px;
                  border: 2px solid black;
                  border-radius: 4px;
                "
              >
              <span>€</span>
            </div>
          </div>
        </div>

        <!-- Email Block -->
        <div
          style="
            display: flex;
            flex-direction: column;
            align-items: center;
            gap: 24px;
            min-width: 690px;
          "
        >
          <div
            style="
              display: flex;
              flex-direction: column;
              align-items: center;
              justify-content: center;
              padding: 24px;
              border: 3px solid #529bc5;
              border-radius: 8px;
              width: 150px;
              height: 200px;
            "
          >
            <img 
              :src="emailIcon" 
              alt="Email icon" 
              style="width: 120px" 
            >
            <p 
              style="margin-top: 16px"
            >
              Email
            </p>
          </div>

          <div style="display: flex; flex-direction: column; gap: 14px">
            <div style="display: flex; align-items: center; gap: 6px">
              <input
                :value="emailContacts"
                readonly
                style="
                  width: 100px;
                  padding: 6px 10px;
                  border: 2px solid black;
                  border-radius: 4px;
                "
              >
              <span>contacts</span>
            </div>
            <div style="display: flex; align-items: center; gap: 6px">
              <input
                :value="emailCost"
                readonly
                style="
                  width: 100px;
                  padding: 6px 10px;
                  border: 2px solid black;
                  border-radius: 4px;
                "
              >
              <span>€</span>
            </div>
          </div>
        </div>
      </div>

      <!-- Total -->
      <div style="margin-top: 32px">
        <h3>
          <strong>TOTAL: {{ totalCost }} €</strong>
        </h3>
      </div>

      <!-- Select -->
      <div
  style="
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 16px;
    width: 100%;
    max-width: 600px;
    margin-top: 24px;
    flex-wrap: wrap;
  "
      >
        <label
          for="duplicate-select"
          style="color: var(--textColor); min-width: 220px"
        >
          In case of duplicates, give priority to:
        </label>
        <v-select
          id="duplicate-select"
          v-model="priority"
          :items="['SMS', 'Email', 'Keep both']"
          outlined
          density="comfortable"
          hide-details
          style="flex: 1; min-width: 180px"
        />
      </div>
    </div>
  </StepLayout>
</template>

<script setup>
import { ref, computed } from "vue";
import { useRouter } from "vue-router";
import { ROUTES } from "@/router/paths";
import StepLayout from "@/components/common/StepLayout.vue";
import BaseButton from "@/components/common/BaseButton.vue";

const router = useRouter();

const smsContacts = 9667;
const smsCost = 821.33;
const emailContacts = 11584;
const emailCost = 595.0;

const priority = ref("SMS");
const totalCost = computed(() => (smsCost + emailCost).toFixed(2));

const smsIcon = new URL("@/assets/icons/sms.svg", import.meta.url).href;
const emailIcon = new URL("@/assets/icons/email.svg", import.meta.url).href;

function goBack() {
  router.push(ROUTES.DASHBOARD);
}

function goToVisuals() {
  router.push(ROUTES.VISUALS_INDEX);
}
</script>

<style scoped>
@media (max-width: 768px) {
  .v-container {
    padding: 16px;
  }
  .responsive-blocks {
    flex-direction: column !important;
    align-items: center !important;
  }

  .email-block,
  .sms-block {
    min-width: unset !important;
    width: 100% !important;
    align-items: center;
  }
}
</style>
