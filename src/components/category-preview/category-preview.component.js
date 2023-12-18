import ProductCard from '../product-card/product-card.component';
import { Link } from 'react-router-dom';
import { CategoryPreviewContainer, PreviewCategory, CategoryTitle } from './category-preview.styles';

const CategoryPreview = ({title, products})=>{
    return(
        <CategoryPreviewContainer >
            <h2>
                <CategoryTitle  to={title}>{title.toUpperCase()}</CategoryTitle>
            </h2>
            <PreviewCategory >
                {
                    products
                        .filter((_, idx) => idx < 4)
                        .map((product) => <ProductCard key={product.id} product={product} />)
                }
            </PreviewCategory>
        </CategoryPreviewContainer>
    )

}

export default CategoryPreview;