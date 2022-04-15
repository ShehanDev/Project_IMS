<template>
  <v-app id="inspire">
    <v-navigation-drawer
      v-model="drawer"
      app
      class="cyan darken-4"
    >
        <div class="text-center mt-5">
           <h1 class="white--text">e LEARN</h1>
           <v-divider color="white" class="mt-4"></v-divider>
            <v-avatar class="my-5" size="60">
            <v-img src="https://cdn.vuetifyjs.com/images/lists/1.jpg" class="image"></v-img>
            </v-avatar>
            <h1 class="white--text">Alison Burgas</h1>
            <h6 class="grey--text ">admin@admin.com</h6>
           
     
              
        </div>

    

      <v-list
        dense
        nav
      >
        <v-list-item
          v-for="item in items"
          :key="item.title"
          link
          :to="item.path"
        >
          <v-list-item-icon>
            <v-icon class="#FFFFFF">{{ item.icon }}</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title class="white--text">{{ item.title }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

    <v-app-bar app elevation="1">
      <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>

      <v-toolbar-title>Welcome to Admin</v-toolbar-title>
           
       <v-spacer> </v-spacer>
       <v-btn flat color="#EF6C00">
       <span class="white--text">Sign Out</span>
       </v-btn>
    </v-app-bar>

    <v-main>
       
      <router-view></router-view>
    </v-main>
  </v-app>
</template>

<script>
  export default {
    data: () => {
      return {
        drawer:false,
        items:[
          { title: 'Dashboard', icon: 'mdi-view-dashboard',path:"/dashboard" },
          { title: 'student', icon: 'mdi-school',path:'/student'},
          { title: 'Course', icon: 'mdi-folder-multiple-outline' ,path:"/courses"},
          { title: 'Lectures', icon: 'mdi-human-male-board' ,path:"lectures"},
          { title: 'Library', icon: 'mdi-book-open-page-variant' ,path:"library"},
          { title: 'My Account', icon: 'mdi-account-box-multiple', },
        ]
      }
  }
   
  }
</script>