import { Component, AfterContentChecked} from '@angular/core';
import { GetMoviesService } from '../../services/get-movies.service';
import { IMAGE_BASE_URL, } from '../../../config';
import { store } from '../../../store';
import { loadData } from '../../../actions/action';
import { from } from 'rxjs';


@Component({
  selector: 'app-moviedetails',
  templateUrl: './moviedetails.component.html',
  styleUrls: ['./moviedetails.component.scss']
})
export class MoviedetailsComponent implements AfterContentChecked {
  data: any;
  data1: any;
  Unsubscribe;
  IMG_URL: any;
  IMG_URL_POSTER = `${IMAGE_BASE_URL}w500`;
  movieID: number;
  title: string;
  overview: string;

  constructor(private getMoviesServies: GetMoviesService) { }

  ngAfterContentChecked(): void {
    this.getMoviesServies.getCachedData().subscribe((data) => {
      console.dir('com', data);
      this.data = data;
      this.IMG_URL = `${IMAGE_BASE_URL}w1280${this.data[0].backdrop_path}`;
      this.movieID = this.data[0].id;
      this.title = this.data[0].title;
      this.overview = this.data[0].overview;
      console.dir(this.data);
    });

  }


}
