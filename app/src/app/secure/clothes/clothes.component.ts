import { Component, OnInit } from '@angular/core';
import { ClothesService } from '../providers/clothes.service';
import * as M from 'materialize-css';
declare var $ : any;

@Component({
  selector: 'app-clothes',
  templateUrl: './clothes.component.html',
  styleUrls: ['./clothes.component.scss']
})
export class ClothesComponent implements OnInit {
  private items: any[] = [];
  private selectedItem: any = {};
  private modalRef: any;
  private selectRef: any;

  constructor(private provider: ClothesService) { }

  ngOnInit() {
    let modalElem = $('.modal').modal();
    this.modalRef = M.Modal.getInstance(modalElem);

    let selectElem = $('select').formSelect();
    this.selectRef = M.FormSelect.getInstance(selectElem);

    this.provider.getClothes()
    .then(data => this.items = data)
    .catch(e => M.toast({ html: e.error }));
  }

  modalItem(item?: any){
    this.selectedItem = this.copyItem(item);
    $(this.selectRef.input).val(this.selectedItem.size);
    this.modalRef.open();
  }

  async deleteItem(item: any){
    try{
      await this.provider.deleteClothes(item);

      this.provider.getClothes()
      .then(data => this.items = data)

      this.modalRef.close();
      this.selectedItem = {};

      M.toast({ html: 'Item deletado com sucesso' });
    } catch(e){
      M.toast({ html: e.error });
    }
  }

  async saveItem(item: any){
    try{
      await (item._id ? this.provider.updateClothes(item) : this.provider.insertClothes(item));

      this.provider.getClothes()
      .then(data => this.items = data);

      this.modalRef.close();
      this.selectedItem = {};

      M.toast({ html: 'Item salvo com sucesso' });
    } catch(e){
      M.toast({ html: e.error });
    }
  }

  private copyItem(item?: any){
    if(!item)
      return {};
    
    return {
      _id: item._id,
      code: item.code,
      type: item.type,
      brand: item.brand,
      size: item.size,
      color: item.color,
      tagPrice: item.tagPrice,
      buyPrice: item.buyPrice,
      suggestedPrice: item.suggestedPrice,
      amount: item.amount,
      description: item.description,
    }
  }
}
