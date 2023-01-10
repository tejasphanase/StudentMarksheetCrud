import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { StudenmarkService } from '../studenmark.service';
import { StudentModel } from './Student.model';
import Swal from 'sweetalert2';
import { MatSnackBar } from '@angular/material/snack-bar';


@Component({
  selector: 'app-markshet',
  templateUrl: './markshet.component.html',
  styleUrls: ['./markshet.component.css']
})
export class MarkshetComponent implements OnInit {

  p: number = 1;
  studentobj: StudentModel = new StudentModel();
  formValue !: FormGroup;
  total: any;
  term: any;
  searchText: any;
  marks: any;
  percentage: any;
  id!: number

  arr = [{
    maths: 50,
    english: 88,
    hindi: 55,
    marathi: 23
  },
  ]

  constructor(private _studentmark: StudenmarkService,
    private formBuilder: FormBuilder,
    private _snack: MatSnackBar) { }

  ngOnInit(): void {
    console.log(this.id);


    this.formValue = this.formBuilder.group({
      roll: ['', Validators.required],
      Studentname: [''],
      maths: [''],
      science: [''],
      english: [''],
      hindi: [''],
      marathi: [''],
    })

    this.getMark();

  }


  postMark() {

    this.studentobj.roll = this.formValue.value.roll;
    this.studentobj.Studentname = this.formValue.value.Studentname;
    this.studentobj.maths = this.formValue.value.maths;
    this.studentobj.science = this.formValue.value.science;
    this.studentobj.english = this.formValue.value.english;
    this.studentobj.hindi = this.formValue.value.hindi;
    this.studentobj.marathi = this.formValue.value.marathi;

    this._studentmark.postMarks(this.formValue.value).subscribe(res => {

      console.log(res);
      alert("marks added sucsessfully")
      let ref = document.getElementById('cancel');
      ref?.click();
      this.formValue.reset();
      this.getMark();
    }, (error) => {

      alert('something went wrong');
    })

    this.formValue.reset();
  }

  getMark(): any {

    this._studentmark.getMarks().subscribe(res => {

      console.log(res)
      this.marks = res;

      this.marks.forEach((student: any) => {
        const sci = student.science
        const math = student.maths
        const mar = student.marathi
        const hindi = student.hindi
        const eng = student.english

        this.total = sci + math + mar + hindi + eng
        student.total = this.total
        this.percentage = this.total / 5
        student.parcentage = this.percentage
      })
    })

    return this.marks
  }

  deleteMark(m: any) {

    Swal.fire({
      icon: 'info',
      showCancelButton: true,
      confirmButtonText: 'Delete',
      title: 'Are you sure , want to delete this Student Marks?'
    }).then((result) => {

      if (result.isConfirmed) {

        this._studentmark.deleteMark(m.id).subscribe(res => {

          this.getMark()

          this._snack.open('Marks Deleted..', '', {

            duration: 3000
          })
        }, (error) => {

          this._snack.open('error in deleting Marks', '', {
            duration: 3000
          })
        })
      }
    })
  }



  onEdit(i: number) {

    console.log(this.marks[i]);
    this.formValue.patchValue({
      roll: this.marks[i].roll,
      Studentname: this.marks[i].Studentname,
      maths: this.marks[i].maths,
      science: this.marks[i].science,
      english: this.marks[i].english,
      hindi: this.marks[i].hindi,
      marathi: this.marks[i].marathi,
    })
    this.id = this.marks[i].id

  }


  updateMark() {

    console.log(this.formValue.value)

    this._studentmark.updateMarksheet(this.formValue.value, this.id).subscribe(res => {

      alert("Marksheet Update succesfully ")

      this.formValue.reset();


      this.getMark();

    })

  }

  pageChangeEvent(event: number) {

    this.p = event;
    this.marks;
  }

  printMarksheet(){

    window.print();
  }
}





