<template>
<v-app id="inspire">

        
             <v-toolbar flat class ="grey lighten-4 "  height="50" app>
                 <v-toolbar-title>
                    <span class="font-weight-dark">Welcome Admin !</span>
                    <v-spacer></v-spacer>
                   </v-toolbar-title>
                <v-spacer> </v-spacer>
                <v-btn flat color="teal darken-4">
                  <span class="white--text">Sign Out</span>
                </v-btn>
             </v-toolbar>
         
      

        
          <v-navigation-drawer permanent class="cyan darken-4" app>
                <v-list class=" white--text">
                  <v-list-item class="px-2">
                    <v-list-item-avatar >
                     <v-img src="https://randomuser.me/api/portraits/women/85.jpg"></v-img>
                    </v-list-item-avatar>
                  </v-list-item>

                  <v-list-item link class=" white--text">
                    <v-list-item-content  align="center" justify="center">
                      <v-list-item-title class="text-h6"  align="center" justify="center">
                        {{username || 'Username'}}
                      </v-list-item-title>
                      <v-list-item-subtitle v-on:click="logout" class=" white--text"  align="center" justify="center">Administrator</v-list-item-subtitle>
                    </v-list-item-content>
                  </v-list-item>
                </v-list>

              <v-divider></v-divider>

              <v-list
                dense
                nav
              >
                <v-list-item
                  v-for="item in items"
                  :key="item.title"
                  link
                  class=" white--text"
                >
                  <v-list-item-icon>
                    <v-icon>{{ item.icon }}</v-icon>
                  </v-list-item-icon>

                  <v-list-item-content>
                    <v-list-item-title>{{ item.title }}</v-list-item-title>
                  </v-list-item-content>
                </v-list-item>
              </v-list>
            </v-navigation-drawer>

            <v-card-title>
                <p class="font-weight-bold">
                  Manage Students
                </p>  
                <v-spacer></v-spacer>
                <v-text-field
                  v-model="search"
                  append-icon="mdi-magnify"
                  label="Search"
                  single-line
                  hide-details
                ></v-text-field>
              </v-card-title>

      <v-data-table
    :headers="headers"
    :items="desserts"
    :items-per-page="5"
    class="elevation-1"
  ></v-data-table>
           
    
   
</v-app>
</template>

<script>
  export default {
    data () {
      return {
        items: [
          { title: 'Dashboard', icon: 'mdi-view-dashboard' },
          { title: 'Students', icon: 'mdi-school'},
          { title: 'Course', icon: 'mdi-folder-multiple-outline' },
          { title: 'Lectures', icon: 'mdi-human-male-board' },
          { title: 'Library', icon: 'mdi-book-open-page-variant' },
          { title: 'My Account', icon: 'mdi-account-box-multiple' },
        ],

       headers: [
          {
            text: 'Dessert (100g serving)',
            align: 'start',
            sortable: false,
            value: 'name',
          },
          { text: 'Calories', value: 'calories' },
          { text: 'Fat (g)', value: 'fat' },
          { text: 'Carbs (g)', value: 'carbs' },
          { text: 'Protein (g)', value: 'protein' },
          { text: 'Iron (%)', value: 'iron' },
        ],
        desserts: [
          {
            name: 'Frozen Yogurt',
            calories: 159,
            fat: 6.0,
            carbs: 24,
            protein: 4.0,
            iron: '1%',
          },
          {
            name: 'Ice cream sandwich',
            calories: 237,
            fat: 9.0,
            carbs: 37,
            protein: 4.3,
            iron: '1%',
          },
          {
            name: 'Eclair',
            calories: 262,
            fat: 16.0,
            carbs: 23,
            protein: 6.0,
            iron: '7%',
          },
          {
            name: 'Cupcake',
            calories: 305,
            fat: 3.7,
            carbs: 67,
            protein: 4.3,
            iron: '8%',
          },
          {
            name: 'Gingerbread',
            calories: 356,
            fat: 16.0,
            carbs: 49,
            protein: 3.9,
            iron: '16%',
          },
          {
            name: 'Jelly bean',
            calories: 375,
            fat: 0.0,
            carbs: 94,
            protein: 0.0,
            iron: '0%',
          },
          {
            name: 'Lollipop',
            calories: 392,
            fat: 0.2,
            carbs: 98,
            protein: 0,
            iron: '2%',
          },
          {
            name: 'Honeycomb',
            calories: 408,
            fat: 3.2,
            carbs: 87,
            protein: 6.5,
            iron: '45%',
          },
          {
            name: 'Donut',
            calories: 452,
            fat: 25.0,
            carbs: 51,
            protein: 4.9,
            iron: '22%',
          },
          {
            name: 'KitKat',
            calories: 518,
            fat: 26.0,
            carbs: 65,
            protein: 7,
            iron: '6%',
          },
        ],

        username:this.$route.params.username
      }
    },
    methods: {
      logout() {
        this.$router.replace({name:'login'})
      }
    }
  }
</script>