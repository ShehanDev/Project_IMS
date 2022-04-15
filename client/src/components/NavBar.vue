<template>
  <v-app id="inspire">
    <v-navigation-drawer
      v-model="drawer"
      app
      dark
      color="#263238"
    >

    
   
    </v-navigation-drawer>

    <v-app-bar app>
      <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>
       <v-toolbar-title>
                    
                    <v-spacer></v-spacer>
                   </v-toolbar-title>
                <v-spacer> </v-spacer>
                <v-btn flat color="#EF6C00">
                  <span class="white--text">Sign Out</span>
                </v-btn>

     
    </v-app-bar>

  
  
  </v-app>
</template>

<script>
  export default {
    data: () =>{
      return {
        drawer:false,
        items:[
          { title: 'Dashboard', icon: 'mdi-view-dashboard',path:"/dashboard" },
          { title: 'student', icon: 'mdi-school',path:'/student'},
          { title: 'Course', icon: 'mdi-folder-multiple-outline' },
          { title: 'Lectures', icon: 'mdi-human-male-board' },
          { title: 'Library', icon: 'mdi-book-open-page-variant' },
          { title: 'My Account', icon: 'mdi-account-box-multiple' },
        ]
      }
    }
  }
</script>

<style scoped>

</style>