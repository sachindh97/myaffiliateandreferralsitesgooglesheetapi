import { Component, OnInit } from '@angular/core';
import {ApiservicesService} from '../apiservices.service'
@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit{

  constructor(private service:ApiservicesService){}

  ngOnInit(): void {
    this.getValues();
  }

  loadingData=[1,2,3,4,5,6,7,8,9,10];
  showLoading=true;

  categoriesData = [
    { id: 1, name: 'all' },
    { id: 2, name: 'hosting' },
    { id: 3, name: 'ecommerce' },
    { id: 4, name: 'product' },
    { id: 5, name: 'finance' },
    { id: 6, name: 'course' },
  ];

  filterData:any = [];
  resData:any;
  pageNo= 1;
  

  getValues()
  {
      this.service.getGoogleSheetValue().subscribe((result)=>{
          console.log(result,'result###');
          result.data.shift();
          this.filterData = result.data;
          this.resData = result.data;
          console.log(this.filterData,'filterDAta###');
          this.showLoading=false;

          
      });
  }



  filterDataVal(data:any)
  {
    let  getFilterVal = data.target.value;
    console.log(getFilterVal,'getFilterVal##');
    
    if(getFilterVal === 'all')
    {
        this.filterData = this.resData;
    }else 
    {
      this.filterData = [];
        this.resData.filter((ele:any)=>{

          if(ele.site_categories == getFilterVal)
          {
                this.filterData.push(ele);
          }

        });
    }

  }

}
