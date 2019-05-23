<template>
  <v-content>
    <v-container fluid fill-height>
      <v-layout align-center justify-center row fill-height>
        <v-flex xs12 md8 mx-2>
          <v-card class="elevation-3">
            <v-card-title>
              <v-spacer></v-spacer>
              <v-text-field
                v-model="search"
                append-icon="search"
                label="Search"
                single-line
                hide-details
              ></v-text-field>
            </v-card-title>
            <v-data-table
              :headers="getHeaders"
              :items="getList"
              hide-actions
              :search="search"
              v-model="selected"
              select-all
            >
              <template v-slot:headers="props">
                <tr>
                  <th>
                    <v-checkbox
                      :input-value="props.all"
                      primary
                      hide-details
                      @click.stop="toggleAll"
                    ></v-checkbox>
                  </th>
                  <th
                    v-for="header in props.headers"
                    :key="header.text"
                    class="title font-weight-bold"
                  >{{ header.text }}</th>
                </tr>
              </template>
              <template v-slot:items="props">
                <tr :active="props.selected">
                  <td>
                    <v-checkbox
                      :input-value="props.selected"
                      primary
                      hide-details
                      v-on:click="getFeedDetails(props.item)"
                    ></v-checkbox>
                  </td>
                  <td class="text-center subheading">{{ props.item.id }}</td>
                  <td class="text-center subheading">{{ props.item.type }}</td>
                  <td class="text-center subheading">{{ props.item.title }}</td>
                  <td class="text-center subheading">
                    <v-text-field
                      v-model="props.item.comment"
                      v-on:keyup.enter="getComment(props.item.comment)"
                    ></v-text-field>
                  </td>
                  <td>
                    <v-flex xs12 mt-4 v-on:click="getSelectedItem(props.item.item)">
                      <v-select
                        :items="getItem"
                        label="Select"
                        solo
                        flat
                        class="subheading"
                        v-model="props.item.item"
                      ></v-select>
                    </v-flex>
                  </td>
                </tr>
              </template>
            </v-data-table>
          </v-card>
        </v-flex>
      </v-layout>
    </v-container>
  </v-content>
</template>

<script>
  import { mapGetters } from "vuex";
  export default {
    data: () => ({
      selected: [],
      list: [],
      item: [],
      search: "",
      comment: "",
      select: "",
      selectedItem: ""
    }),

    created() {
      this.$store.dispatch("loadHeaderData", "./static/headers.json");
      this.$store.dispatch("loadData", "./static/feeds.json");
      this.$store.dispatch("loadDropDown", "./static/items.json");
    },

    computed: {
      getHeaders() {
        return this.$store.getters.getHeaders;
      },
      getList() {
        return this.$store.getters.getFeeds;
      },
      getItem() {
        return this.$store.getters.getItems;
      }
    },

    methods: {
      toggleAll() {
        if (this.selected.length) this.selected = [];
        else this.selected = this.getList.slice();
      },
      showFeedDetails(field, select) {
        console.log(select);
      },
      getComment(comment) {
        this.comment = comment;
        console.log(this.comment);
      },
      getFeedDetails(feed) {
        if(this.selected){
          
        }
        console.log(feed);
      },
      getSelectedItem(item) {
        this.selectedItem = item;
        console.log(item);
      }
    }
  };
</script>

<style>
</style>
