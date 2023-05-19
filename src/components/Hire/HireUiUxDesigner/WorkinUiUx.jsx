
import Menu from '../../../includes/Menu'
import { useState } from 'react'

function WorkinUiUx() {

    const [items, setItems] = useState(Menu);
    const filterItem = (categItem) =>{
       const updatedItems = Menu.filter((curElem)=>{
         return curElem.category === categItem;
       })
       setItems(updatedItems);
    }
  return (
    <div>
	         
	<section class="align-center medium-padding100 case-project-sec graphic-case">
		<div class="container">
			<div class="row">
				<div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
					<div class="crumina-module crumina-heading">
						<h2 class="heading-title hire-heading">Some of our <span class="c-primary"> UI/UX</span> <br/> Work</h2>
					</div>
				</div>
				<div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">

					<ul class="cat-list-bg-style sorting-menu">
					
						<li class="cat-list__item" ><a onClick={()=> filterItem('website')}  class="">Websites</a></li>
						<li class="cat-list__item" ><a  onClick={()=> filterItem('mobile_screen')} class="">Mobile Screens</a></li>
						<li class="cat-list__item" ><a  onClick={()=> filterItem('banner')} class="">Banner</a></li>
						<li class="cat-list__item"><a  onClick={()=> filterItem('logo')} class="">Logo</a></li>
                        	<li class="cat-list__item active" ><a onClick={()=> setItems(Menu)}  class="">All</a></li>
					</ul>

					<div class="row sorting-container" id="clients-grid" data-layout="masonry">
						{
                            items.map((elem)=>{
                                const {id,Image} = elem;
                                return(
	                        <div class="col-lg-3 col-md-6 col-sm-6 col-xs-12 sorting-item messages mobile-apps-item">
							<div class="screenshots-item">
								<img src={Image} alt="logo"/>
								<div class="overlay-standard overlay--blue-dark"></div>
								<a href={Image} class="expand js-zoom-image">
									<svg class="utouch-icon utouch-icon-expand"><use xlinkHref="#utouch-icon-expand"></use></svg>
									Expand
								</a>
							</div>
						</div>

                                )
                            })
                        }
					

					</div>

				</div>
			</div>
		</div>
	</section>
    </div>
  )
}

export default WorkinUiUx