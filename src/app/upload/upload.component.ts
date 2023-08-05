import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-upload',
  templateUrl: './upload.component.html',
  styleUrls: ['./upload.component.css']
})
export class UploadComponent {

  selectedFile!: File;
  resMessage: any="";
  imageName: any;
  name:string="";
  degree:string="";
  exp:string="";
  phoneno:string="";
  spl:string="";
  address:string="";


  constructor(private http:HttpClient){}
  ngOnInit(){
    this.selectedFile={} as any;
  }

  //Gets called when the user selects an image
  public onFileChanged(event:any) {
    this.selectedFile = event.target.files[0];
  }


  prdSubmitt(){
    
    const uploadImageData = new FormData();

    uploadImageData.append('dietFile', this.selectedFile, this.selectedFile.name);
    uploadImageData.append("name",this.name);
    uploadImageData.append("degree",this.degree);
    uploadImageData.append("spl",this.spl);
    uploadImageData.append("exp",this.exp);
    uploadImageData.append("address",this.address);
    uploadImageData.append("phone",this.phoneno);
    
    

    let res =this.http.post("http://localhost:1234/doctor/add",uploadImageData,
    {responseType:'text' as 'json'});
    res.subscribe(
      data=>{
        this.resMessage = data;
        console.log(data);
        this.name="";
        this.degree="";
        this.spl="";
        this.exp="";
        this.address="";
        this.phoneno="";
        
      }
    );

  }

}