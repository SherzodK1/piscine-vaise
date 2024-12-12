<template>
  <AppHeader />
  <userAdmin />
  <CourseAdmin />
  <EventAdmin />
  <EquipmentAdmin />
  <SpaceAdmin />
</template>

<script>
import api from "../components/apiAdmin";
import userAdmin from "@/components/userAdmin.vue";
import CourseAdmin from "@/components/CourseAdmin.vue";
import EventAdmin from "@/components/EventAdmin.vue";
import EquipmentAdmin from "@/components/EquipmentAdmin.vue";
import SpaceAdmin from "@/components/SpaceAdmin.vue";
import AppHeader from "@/components/AppHeader.vue";
</script>
