import React from 'react';
import img from '../images/Banner/blog.webp'
import img1 from '../images/Banner/images.jpg'

const Blogs = () => {
  return (
    <div>
      <h2>This is Blogs</h2>
      <section class="latest-news">
                    <div class="container">
                        <h1 class="section-heading my-5 text-danger">Lastest News from Blog</h1>
                        <div class="article-wrapper">
                            <article class="card magic-shadow-sm my-5">
                                <div>
                                 <img className='w-25' src={img} alt="" />
                                </div>
                                <div class="card-content">
                                    <div class="post-meta flex items-center justify-between">
                                        <span>July 03, 2022</span>
                                        <div>
                                            <span>Posted by <strong>FreshMeal</strong></span>
                                            <span class="comment-count">12 Comments</span>
                                        </div>
                                    </div>

                                    <h2 className='text-danger'>Patangazz Apple</h2>
                                    <p>The red, fleshy part of a apple is not ovary tissue, which makes the apples an accessory fruit. There are numerous ovaries (green and brown) embedded on the surface of the accessory tissue. Technically, each of these ovaries forms a dry, single seeded fruit (achene).
</p>
                                </div>
                            </article>
                            <article class="card magic-shadow-sm my-5 ">
                                <div>
                                    <img className='w-25' src={img1} alt="" />
                                </div>
                                <div class="card-content">
                                    <div class="post-meta flex ">
                                        <span>July 03, 2022</span>
                                        <div>
                                            <span>Posted by <strong>Apple komola</strong></span>
                                            <span class="comment-count">12 Comments</span>
                                        </div>
                                    </div>

                                    <h2 className='text-danger text-justify p-3'>Flesy Strawberry</h2>
                                    <p>The red, fleshy part of a strawberry is not ovary tissue, which makes the strawberry an accessory fruit. There are numerous ovaries (green and brown) embedded on the surface of the accessory tissue. Technically, each of these ovaries forms a dry, single seeded fruit (achene).
Photograph by Kevin C. Nixon, plantsystematics.org</p>
                                </div>
                            </article>
                        </div>
                        <div class="text-center btn-wrapper">
                            <button class="btn btn-secondary">View All</button>
                        </div>
                    </div>
                </section>
    </div>
  );
};

export default Blogs;