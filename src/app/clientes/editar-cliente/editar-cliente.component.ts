import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { parsearErroresAPI } from 'src/app/utilidades/utilidades';
import { clienteCreacionDTO, clienteDTO } from '../clientes';
import { ClientesService } from '../clientes.service';

@Component({
  selector: 'app-editar-cliente',
  templateUrl: './editar-cliente.component.html',
  styleUrls: ['./editar-cliente.component.css'],
})
export class EditarClienteComponent implements OnInit {
  constructor(
    private router: Router,
    private clienteService: ClientesService,
    private activatedRoute: ActivatedRoute
  ) {}

  modelo?: clienteDTO;
  errores: string[] = [];

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params) => {
      this.clienteService.obtenerPorId(params['id']).subscribe(
        (cliente) => {
          this.modelo = cliente;
        },
        () => this.router.navigate(['/clientes'])
      );
    });
  }

  guardarCambios(cliente: clienteCreacionDTO) {
    if (this.modelo) {
      this.clienteService.editar(this.modelo.id, cliente).subscribe(
        () => {
          this.router.navigate(['/clientes']);
        },
        (error) => (this.errores = parsearErroresAPI(error))
      );
    }
  }
}
