<template>
 <v-container>
    <v-card
    elevation="1"
    >       <v-card-title> <v-toolbar-title>Add New Student</v-toolbar-title></v-card-title>
            <v-card-subtitle>
            <div class="submit-form mx-auto">
                <div v-if="!submitted">
                <v-form ref="form" lazy-validation>
                    <v-row >
                        <v-col cols="12" md="6">
                            <v-file-input
                            show-size
                            counter
                            multiple
                            label="File input"></v-file-input>
                        </v-col>
                        <v-col cols="12" md="6">
                            <v-text-field
                            v-model="student.mobile"
                            :rules="[(v) => !!v || 'Title is required']"
                            label="Mobile"
                            required
                            ></v-text-field>

                        </v-col>
                        
                            
                            
                    </v-row>
                    <v-row>
                        <v-col cols="12" md="6">
                            <v-text-field
                            v-model="student.name"
                            :rules="[(v) => !!v || 'Name is required']"
                            label="Name"
                            required
                            ></v-text-field>
                        </v-col>
                        <v-col cols="12" md="6">
                            <v-text-field
                            v-model="student.faculty"
                            :rules="[(v) => !!v || 'faculty is required']"
                            label="Faculty"
                            required
                            ></v-text-field>
                        </v-col>
                            
                    </v-row>
                    <v-row>
                        <v-text-field
                            v-model="student.courses"
                            :rules="[(v) => !!v || 'Courses is required']"
                            label="Courses"
                            required
                            ></v-text-field>

                    </v-row>

                </v-form>
                <v-btn color="primary" class="mt-3" @click="saveStudent()">Submit</v-btn>
                </div>
                <div v-else>
                <v-card class="mx-auto">
                    <v-card-title>
                    Submitted successfully!
                    </v-card-title>
                </v-card>
                </div>
            </div>
        </v-card-subtitle>
    </v-card>
 </v-container>
</template>
<script>
import studentDataService from "../../services/studentServices";
export default {
  name: "add-tutorial",
  data() {
    return {
      student: {
        name: "",
        number:"",
        faculty:"",
        courses:[],
        published: false,
      },
      submitted: false,
    };
  },
  methods: {
    saveStudent() {
      var data = {
        name: this.student.name,
        number: this.student.number,
        faculty: this.student.faculty,
        course: this.student.courses,
      };
      studentDataService.create(data)
        .then((response) => {
          this.tutorial.id = response.data.id;
          console.log(response.data);
          this.submitted = true;
        })
        .catch((e) => {
          console.log(e);
        });
    },
    newStudent() {
      this.submitted = false;
      this.student = {};
    },
  },
};
</script>
<style>

</style>
