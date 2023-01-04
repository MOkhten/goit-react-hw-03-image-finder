// import { render } from "@testing-library/react";
import { Component } from "react";
//  import { ToastContainer, toast } from 'react-toastify';
import { Searchbar } from "./Searchbar/Searchbar";
import { fetchImages } from "../Services/Api";
import { ImageGallery } from "./ImageGallery/ImageGallery";

export class App extends Component {
  state = {
    query: '',
    status: 'idle',
    page: 1,
    images: [],
    
  }

  async componentDidUpdate(_, prevState) {
    const { page, query } = this.state;
    try {
      
       if (prevState.query !== query || prevState.page !== page) {
        this.setState({ status: 'loading' })
        const res = await fetchImages(query, page);
        if (res.data.total === 0) {
          throw new Error('Images with your query was not found');
        }
        this.setState(prevState => ({
          images: [...prevState.images, ...res.data.hits],
          status: 'finished'
        }))
      }

      
    } catch (error) {
      console.log(error);
  }
  };

  handleSubmit = (value) => {
    this.setState({
      query: value.query,
      page: 1,
      images: [],
    });
}

  loadMore = () => {
    this.setState(prevState => ({
      page: prevState.page + 1,
    }))
  }

  render() {
    const { images } = this.state;
    return (
      <div>
        <Searchbar onSubmit={this.handleSubmit} />
        <ImageGallery images = {images} />
      </div>
    );
  };
}