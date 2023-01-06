
import { Component } from 'react';
//  import { ToastContainer, toast } from 'react-toastify';
import { Searchbar } from './Searchbar/Searchbar';
import { fetchImages } from '../Services/Api';
import { ImageGallery } from './ImageGallery/ImageGallery';
import { Spiner } from './ImageGalleryItem/Spiner/Spiner';

export class App extends Component {
  state = {
    query: '',
    status: 'idle',
    page: 1,
    images: [],
    
  };


  async componentDidUpdate(_, prevState) {
    const { page, query } = this.state;
  
      if (prevState.query !== query || prevState.page !== page) {
         try {
        this.setState({ status: 'loading' })
        const res = await fetchImages(query, page);
        if (res.total === 0) {
          throw new Error('Images with your query was not found');
        }
         this.setState(prevState => ({
           images: [...prevState.images, ...res.hits],
           status: 'finished'
         }));
      }
     catch (error) {
           console.log(error);
           }
  }
  }


     handleSubmit = search => {
      this.setState({
        query: search,
        page: 1,
      images: [],
      });
  };

 

  loadMore = () => {
    this.setState(prevState => ({
      page: prevState.page + 1,
    }));
  };

  render() {
    const { images, status } = this.state;
    console.log({images});
    return (
      <div>
        <Searchbar onSubmit={this.handleSubmit} />
        <ImageGallery images={images} />
        {status === 'loading' && <Spiner />}
      </div>
    );
  }
}



