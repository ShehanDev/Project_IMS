 <template>
 <v-container>
 <div class="table" style="height:100vh;">
  <v-data-table
    :headers="headers"
    :items="studentID"
    class="elevation-1"
  >
    <template v-slot:top>
      <v-toolbar
        flat
      >
        <v-toolbar-title>Manage Students</v-toolbar-title>
        <v-divider
          class="mx-4"
          inset
          vertical
        ></v-divider>
        <v-spacer></v-spacer>
         <v-text-field
        v-model="search"
        append-icon="mdi-magnify"
        label="Search"
        single-line
        hide-details
      ></v-text-field>

      <v-spacer></v-spacer>
    
        <template>
          <v-row
          align="center"
          justify="space-around"
            >
  
         <v-btn to='/addstudent'>Add Student</v-btn>
        
          </v-row>
        </template>

        <v-dialog
          v-model="dialog"
          max-width="500px"
        >

          <v-card>
            <v-card-title>
              <span class="text-h5">{{ formTitle }}</span>
            </v-card-title>

            <v-card-text>
              <v-container>
                <v-row>
                  <v-col
                    cols="12"
                    sm="6"
                    md="4"
                  >
                    <v-text-field
                      v-model="editedItem.name"
                      label="StudentID"
                    ></v-text-field>
                  </v-col>
                  <v-col
                    cols="12"
                    sm="6"
                    md="4"
                  >
                    <v-text-field
                      v-model="editedItem.Sname"
                      label="Name"
                    ></v-text-field>
                  </v-col>
                  <v-col
                    cols="12"
                    sm="6"
                    md="4"
                  >
                    <v-text-field
                      v-model="editedItem.SFaculty"
                      label="Faculty"
                    ></v-text-field>
                  </v-col>
                  <v-col
                    cols="12"
                    sm="6"
                    md="4"
                  >
                    <v-text-field
                      v-model="editedItem.SBatch"
                      label="Batch"
                    ></v-text-field>
                  </v-col>
                  <v-col
                    cols="12"
                    sm="6"
                    md="4"
                  >
                    <v-text-field
                      v-model="editedItem.SMobile"
                      label="Mobile No"
                    ></v-text-field>
                  </v-col>
                </v-row>
              </v-container>
            </v-card-text>

            
          </v-card>
        </v-dialog>
        <v-dialog v-model="dialogDelete" max-width="500px">
          <v-card>
            <v-card-title class="text-h5">Are you sure you want to delete this item?</v-card-title>
            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn color="blue darken-1" text @click="closeDelete">Cancel</v-btn>
              <v-btn color="blue darken-1" text @click="deleteItemConfirm">OK</v-btn>
              <v-spacer></v-spacer>
            </v-card-actions>
          </v-card>
        </v-dialog>
      </v-toolbar>
    </template>
        <template v-slot:[`item.actions`]="{ item }">
      <v-icon
        small
        class="mr-2"
        @click="editItem(item)"
      >
        mdi-pencil
      </v-icon>
      <v-icon
        small
        @click="deleteItem(item)"
      >
        mdi-delete
      </v-icon>
    </template>
    <template v-slot:no-data>
      <v-btn
        color="primary"
        @click="initialize"
      >
        Reset
      </v-btn>
    </template>
  </v-data-table>

 </div>
 </v-container>
</template>

<script>
  export default {
    data: () => ({
      dialog: false,
      dialogDelete: false,
      headers: [
        {
          text: 'STUDENT ID',
          align: 'start',
          sortable: false,
          value: 'name',
        },
        { text: 'NAME', value: 'Sname' },
        { text: 'FACULTY', value: 'SFaculty' },
        { text: 'BATCH', value: 'SBatch' },
        { text: 'MOBILE NO', value: 'SMobile' },
        { text: 'Actions', value: 'actions', sortable: false },
      ],
      studentID: [],
      editedIndex: -1,
      editedItem: {
        name: '',
        Sname: 0,
        SFaculty: 0,
        SBatch: 0,
        SMobile: 0,
      },
      defaultItem: {
       name: '',
        Sname: 0,
        SFaculty: 0,
        SBatch: 0,
        SMobile: 0,
      },
    }),

    computed: {
      formTitle () {
        return this.editedIndex === -1 ? 'Add Student' : 'Edit Item'
      },
    },

    watch: {
      dialog (val) {
        val || this.close()
      },
      dialogDelete (val) {
        val || this.closeDelete()
      },
    },

    created () {
      this.initialize()
    },

    methods: {
      initialize () {
        this.studentID = [
          {
             name: 'IT19956534',
             Sname: 'Will Smity',
             SFaculty:'Computing',
             SBatch: 'Y3S2 IT 1.2',
             SMobile: '0711387645',
          },
          {
             name: 'IT19956712',
             Sname: 'John Willian',
             SFaculty:'Bussiness',
             SBatch: 'Y3S2 BM 1.2',
             SMobile: '0761118967',
           
          },
          {
             name: 'EN19976545',
             Sname: 'Ineuron Zea',
             SFaculty:'Engineering',
             SBatch: 'Y3S2 EN 3.2',
             SMobile: '0717856123',
          },
          {
             name: 'IT19928534',
             Sname: 'Mark Zakerber',
             SFaculty:'Computing',
             SBatch: 'Y2S2 IT 1.2',
             SMobile: '0718967345',
            
          },
          {
             name: 'BM19928076',
             Sname: 'Richerd Browly',
             SFaculty:'Bussiness',
             SBatch: 'Y1S2 BM 1.1',
             SMobile: '0766745852',
          },
        ]
      },

      editItem (item) {
        this.editedIndex = this.studentID.indexOf(item)
        this.editedItem = Object.assign({}, item)
        this.dialog = true
      },

      deleteItem (item) {
        this.editedIndex = this.studentID.indexOf(item)
        this.editedItem = Object.assign({}, item)
        this.dialogDelete = true
      },

      deleteItemConfirm () {
        this.studentID.splice(this.editedIndex, 1)
        this.closeDelete()
      },

      close () {
        this.dialog = false
        this.$nextTick(() => {
          this.editedItem = Object.assign({}, this.defaultItem)
          this.editedIndex = -1
        })
      },

      closeDelete () {
        this.dialogDelete = false
        this.$nextTick(() => {
          this.editedItem = Object.assign({}, this.defaultItem)
          this.editedIndex = -1
        })
      },

      save () {
        if (this.editedIndex > -1) {
          Object.assign(this.studentID[this.editedIndex], this.editedItem)
        } else {
          this.studentID.push(this.editedItem)
        }
        this.close()
      },
    },
  }
</script>

<style>
.myTable{
  overflow-y: hidden;
}
</style>