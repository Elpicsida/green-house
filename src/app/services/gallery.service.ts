import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ImageModel } from '../../models/image.model';

@Injectable({
  providedIn: 'root'
})
export class GalleryService {

  constructor(private httpClient: HttpClient) { }

  public async getGalleryItems(): Promise<ImageModel[]> {
    return this.httpClient.get<ImageModel[]>("http://localhost:8080/api/gallery").toPromise();
  }

  public async createGalleryItem(model: ImageModel): Promise<any> {
    return this.httpClient.post<any>("http://localhost:8080/api/gallery", model).toPromise();
  }

  public async deleteGalleryItem(id: number): Promise<boolean> { 
    return this.httpClient.delete<boolean>("http://localhost:8080/api/gallery/" + id).toPromise();
  }
}
