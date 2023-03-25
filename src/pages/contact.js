import React from "react";
import Layout from "./../components/Layout";
import { graphql } from "gatsby";
import RecipesList from "../components/RecipesList";
import SEO from "../components/SEO";

const Contact = ({ data }) => {
  const recipes = data.allContentfulRecipe.nodes;
  return (
    <Layout>
      <SEO title="Contact"/>
      <main className="page">
        <section className="contact-page">
          <article className="contact-info">
            <h3>FRESH FROM OUR COMMUNITY</h3>
            <p>
              Place a 5 qt or larger dutch oven (with the lid) in the oven and
              preheat to 450°F for 1 hour.
            </p>
            <p>
              Remove the pot from the oven and carefully lift the bread out of
              the pot, using the parchment paper to grab it. Place on a wire
              rack and allow to rest for 1 hour before cutting and enjoying.
            </p>
            <p>
              This recipe and the accompanying “ How to make your own Soudough
              “. don’t quite match. The amounts of flour are missing in the
              above description. It would be nice. I’ll let you know how it
              turns out. Can I replace the spelt flour with another? Also it
              would be good if you provided photos of the stretching and folding
              process.
            </p>
          </article>
          <article>
            <form
              className="form contact-form"
              action="https://formspree.io/f/xknardwp"
              method="POST"
            >
              <div className="form-row">
                <label htmlFor="name">your name</label>
                <input type="text" name="name" id="name" />
              </div>
              <div className="form-row">
                <label htmlFor="email">your email</label>
                <input type="text" name="email" id="email" />
              </div>
              <div className="form-row">
                <label htmlFor="message">message</label>
                <textarea name="message" id="message"></textarea>
              </div>
              <button type="submit" className="btn block">
                submit
              </button>
            </form>
          </article>
        </section>

        <section className="featured-recipes">
          <h5>Look at this Awesomesounce</h5>
          <RecipesList recipes={recipes} />
        </section>
      </main>
    </Layout>
  );
};
export const query = graphql`
  query {
    allContentfulRecipe(
      sort: { title: ASC }
      filter: { featured: { eq: true } }
    ) {
      nodes {
        id
        title
        cookTime
        prepTime
        content {
          tags
        }
        image {
          gatsbyImageData(layout: CONSTRAINED, placeholder: BLURRED)
        }
      }
    }
  }
`;
export default Contact;
