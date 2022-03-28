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
                  <v-list-item class="px-2" align="center" justify="center" >
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

      
           
    
   
</v-app>
</template>

<script>
  export default {
    data () {
      return {
        items: [
          { title: 'charge', icon: 'mdi-ev-plug-type1' },
          { title: 'profile', icon: 'mdi-account' },
          { title: 'Session', icon: 'mdi-menu-open' },
          { title: 'Payments', icon: 'mdi-credit-card-marker' },
          { title: 'Notifications', icon: 'mdi-bell' },
          { title: 'Reports', icon: 'mdi-chart-areaspline' },
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