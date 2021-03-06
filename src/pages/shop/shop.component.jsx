import React, { Component } from 'react'
import SHOP_DATA from './shop.data.js';
import CollectionPreview from '../../components/colloection-preview/collection-preview.component'

export default class Shop extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         collections: SHOP_DATA  
      };
    };
    
    render() {
        const {collections} = this.state || [];
        return (
            <div className="shop-page">
               {
                   collections.map(({id, ...otherCollectionsProps})=>(<CollectionPreview {...otherCollectionsProps}/>))
               }
            </div>
        )
    }
}
