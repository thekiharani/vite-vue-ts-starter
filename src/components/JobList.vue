<script lang="ts">
import { computed, defineComponent, ref } from "vue";
import Job from "../types/Job";
import OrderTerm from "../types/OrderTerm";
import JobCard from "./JobCard.vue";

export default defineComponent({
  name: "JobList",
  components: { JobCard },
  setup() {
    const jobs = ref<Job[]>([
      {
        title: "Software Engineer",
        location: "Ruiru, Kenya",
        salary: 105000,
        id: "SERKE-001",
      },
      {
        title: "Senior Accountant",
        location: "Juja, Kenya",
        salary: 67000,
        id: "ACJKE-001",
      },
      {
        title: "HR Associate",
        location: "Thika, Kenya",
        salary: 72000,
        id: "HATKE-001",
      },
    ]);

    const order = ref<OrderTerm>("title");

    const handleClick = (term: OrderTerm) => {
      order.value = term;
    };

    const orderedJobs = computed(() => {
      return [...jobs.value].sort((a: Job, b: Job) => {
        return a[order.value] > b[order.value] ? 1 : -1;
      });
    });

    return { handleClick, order, orderedJobs };
  },
});
</script>

<template>
  <div class="flex justify-center">
    <div
      class="my-12 rounded-2xl w-full lg:w-3/5 mx-6 lg:mx-0 px-6 lg:px-12 py-12"
    >
      <div class="flex space-x-2 justify-center mb-6">
        <button
          @click="handleClick('title')"
          class="bg-blue-500 text-white px-4 py-2 rounded-md"
        >
          Order by Title
        </button>
        <button
          @click="handleClick('salary')"
          class="bg-blue-500 text-white px-4 py-2 rounded-md"
        >
          Order by Salary
        </button>
        <button
          @click="handleClick('location')"
          class="bg-blue-500 text-white px-4 py-2 rounded-md"
        >
          Order by Location
        </button>
      </div>

      <h3 class="text-center text-2xl font-semibold mb-3">
        Ordered by: <span class="font-bold">{{ order }}</span>
      </h3>
      <transition-group name="job_list" tag="div">
        <div v-for="job in orderedJobs" :key="job.id">
          <JobCard :job="job" />
        </div>
      </transition-group>
    </div>
  </div>
</template>

<style scoped>
.job_list-move {
  transition: all 750ms;
}
</style>