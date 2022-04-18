import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { TokenService } from 'src/app/service/token.service';
import { ProblemService } from 'src/app/service/problem.service';
import { AuthService } from 'src/app/service/auth.service';

@Component({
  selector: 'app-register-problem',
  templateUrl: './register-problem.component.html',
  styleUrls: ['./register-problem.component.scss'],
})
export class RegisterProblemComponent implements OnInit {
  public form!: FormGroup;
  title:string = 'Registrar problema';
  btn:string = 'Agregar'; 
  id: string | null;  
  usuario:any = localStorage.getItem('email');

  constructor(
    private problemService: ProblemService,
    private authService: AuthService,
    private tokenService: TokenService,
    private formBuilder: FormBuilder,
    private router: Router,
    private aRouter: ActivatedRoute,
  ) {
    this.id = aRouter.snapshot.paramMap.get('problem');
  }
  ngOnInit(): void {
    this.loaderToken();
    this.isEdit();
    
    this.form = this.formBuilder.group({
      usuario: {},
      description: ['',
        Validators.compose([
          Validators.required,
          Validators.maxLength(500)
      ])],
      fecha_finalizacion: ['', Validators.required],
    });
    console.log(this.form.value);
    console.log(typeof(this.form));
    
  }

  input:any = {
    title: 'Título del problema',
    name: 'nameproblem',
    placeholder: 'Lorem ipsum',
    type: 'text',
  };
  
  textarea:any = {
    title: 'Descripción',
    name: 'description',
    placeholder: 'Lorem ipsum',
  };

  sendData() {
    this.problemService.getUser(this.usuario).subscribe((el) => {
      this.form.patchValue({
        usuario: el
      })
      console.log('edede',this.form.value);      
    });
        
    if (!this.form.valid) {
      console.log('error en send data valid');
      return;
    }

    this.problemService.post(this.form.value)
      .subscribe(data => {
        console.log('Agregado con exito');
      });
    this.sendData()
  }

  isEdit() {
    if (this.id !== null) {
      this.title = 'Editar problema';
      this.btn = 'Editar problema';
      this.problemService.getProblem(this.id).subscribe((data) => {
        this.form.setValue({
          nombre: data.nombre,
          problem: data.problem,
          descripcion: data.descripcion,
          // usuario: data.usuario,
        });
        const output = document.getElementById('idProblem');
        if (output){
          output.setAttribute("value",data.problem)
        }
      });
    }
  }

  public loaderToken() {
    if (this.tokenService.getToken()) {
      if(this.tokenService.getAuthorities().length < 2){
      this.router.navigateByUrl("/register-problem");
      }
    } else {
      this.router.navigateByUrl("/login");
    }
  }
}
