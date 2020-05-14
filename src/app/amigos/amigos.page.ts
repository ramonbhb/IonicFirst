import { Component, OnInit } from '@angular/core';
import { ActionSheetController } from '@ionic/angular';

@Component({
  selector: 'app-amigos',
  templateUrl: './amigos.page.html',
  styleUrls: ['./amigos.page.scss'],
})
export class AmigosPage implements OnInit {

  amigos = [
    { 
      nome: "João",
      idade: "30",
      level: 3
    },  { 
      nome: "Mariana",
      idade: "25",
      level: 5
    },
    { 
      nome: "Luiza",
      idade: "50",
      level: 2
    },
    { 
      nome: "Pedro",
      idade: "22",
      level: 5
    },
    { 
      nome: "Mateus",
      idade: "22",
      level: 4
    },
  ]

  constructor(private actionSheetController : ActionSheetController) { }

  ngOnInit() {
  }

  async deleteAmigoAction(nome: string) {
    let buttons = [
      { text: "Deletar", role: "destructive",
      handler: () => {
        this.deleteAmigo(nome);
      }},
      { text: "Editar"},
      { text: "Cancelar", role: "cancel"}
    ];

    const actionSheet = await this.actionSheetController.create({
      header: "Ações",
      buttons: buttons
    });
    
    await actionSheet.present();
  }

  deleteAmigo(nome: string) {
    this.amigos.forEach((item, index) => {
      if(item.nome === nome) this.amigos.splice(index,1);
    })
  }
}