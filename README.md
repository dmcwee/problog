# ProBlog

**ProBlog** is a GitHub pages compatible Jekyll site theme I created and use on my [personal blog](https://davidmcwee.com). Many of the features have been developed over time as I need/want new abilities or displays. **ProBlog** uses [BootStrap]() for a responsive design, specialized icons, and site color modes to make branding easier and consistent. 

## Installation

Add this line to your Jekyll site's `Gemfile`:

```ruby
gem "problog"
```

And add this line to your Jekyll site's `_config.yml`:

```yaml
theme: problog
```

And then execute:

    $ bundle

Or install it yourself as:

    $ gem install problog

## Usage

The **ProBlog** theme has a number of customization and specialization features that can be set at the Site or Page level.

### Data

The theme uses `_data` yml file to control the site navigation and social media links. Icons for the social media sites are pulled from the BootStrap Icons using the Icon Font for rendering.

#### _data/navigation.yml

Site navigation is pulled from the `_data/navigation.yml` file. Currently the navigation only support single level navigation but allows for custom display text (`Name`) and url (`Link`). 

**Example:**
```yml
  - name: Link 1
    link: /default.html
  - name: Link 2
    link: www.google.com
```

#### _data/socialmedia.yml

Social Media icons and lins are pulled from the `_data/socialmedia.yml` file. Items described in this file can provide a link to your social media instance as well as an easy way to share a post from your blog to the social media site.

**Example:**
```yml
- name: linkedin
  username: linkedin
  iconclass: bi-linkedin
  url: "https://www.linkedin.com/in/your_username_here/"
  supportShare: true
  shareurl: "https://www.linkedin.com/sharing/share-offsite/?url="
- name: github
  username: github
  iconclass: bi-github
  url: "https://github.com/your_username_here"
```

In the above example the LinkedIn entry will appear in the top navigation area and will link a reader directly to your linked profile. In addition, because the LinkedIn entry includes the `supportShare: true` the LinkedIn icon will appear in the by-line on Post pages and will use the `shareurl: ...` value to allow the reader to easily share your post to LinkedIn. GitHub will only appear in the top navigtion area as a link to your GitHub profile. The `iconclass` value should be the Icon font class name for the desired social media site [example](https://icons.getbootstrap.com/icons/linkedin/).

Using the iconclass, url, supportShare, and shareurl should make the process of including your desired social media links easy and consisten across your site, and should make adding new items easy in the future.

### Includes

There are several items in the `_includes` section that can be overridden or used on other pages.

#### article.html

Article is used by the Post List to provide a consistent summary display of blog posts. Article can be used anywhere you want to include the title, by-line, blog summary, and a link to the blog post.

#### by-line.html

By-Line is responsible for displaying the post's publication date, updated date, categories, and optionally the social media share links.

#### featured.html

Featured is recommended to use on the home page to highlight blog posts that are frequently used or you want to highlight. The featured include will display up to 4 posts, include their image, title, categories, summary, and a link to the post.

#### google-analytics.html

This is included from head to provide Google Analytics tracking to your site. If the Page or Site `google_analytics` value is set then this will automatically be included.

#### head.html

This is the HTML `head` content and includes the seo, google-analytics, and pulls in the style sheets from Bootstrap, Bootstrap Icons, and the `assets/css/style.css` file.

#### navigation.html

Navigation provides the top header and navigation links for the site. Social Media links to display are determined by the `_data/socialmedia.yml` file and the navigation links are controlled by the `_data/navigation.yml` file. Navigation's outer most `div` also includes the `data-bs-theme={{site.nav-bs-theme}}` so it can be themed the same or differently from the sites theme.

#### postlist.html

PostList provides a list of blog posts published on the site and utilizes `article.html` for the specific rendering of each post's summary.

#### scripts.html

Scripts is included in the default layout as the final element before the end of the body and pulls in the desired javascript libraries including those for jQuery, BootStrap and Popper.

#### seo.html

SEO (Search Engine Optimization) handles customizations for Twitter, FaceBook, and Search Engines to improve the look and sharing of your site with these systems.

#### series.html

Series is used on blog posts that have multiple parts and allows an easy way to display related posts to the user. Adding `series` to the page's Front Matters material will cause this to generate and list the related posts.

### Layouts

There are three available layouts to use: `default`, `page`, `post`. 

#### Default

The **Default** layout is used by the `page` and `post` layouts and is responsible for the basic HTML content like `head`, `script`, `seo`, `navigation`, etc. Customizations to this layout will impact both Page and Post layouts which may be undesirable, so the recommendation is to customize the Page or Post layouts to meet your needs.

#### Page

The **Page** layout utilizes the `default` layout and does not provide any additional customizations. Customizing this to change the site's main page or other pages is more desirable than making changes to the `default` layout itself.

#### Post

The **Post** layout is used for all blog posts, typically pages located in the `_posts` folder. This page has additional components to display a blog banner, title, and the post series.

The post's title can be themed by setting the page's `title-bs-theme` to a BootStrap theme. If the post's banner image is dark then setting the `title-bs-theme` to `dark` will cause the post's title text to render in a light color while a solid dark background will be applied to provide the necessary contrast to read it easily.

### SASS

Theme specific `scss` files are stored here. The `problog.scss` file is responsible for pulling together all of the themes scss files.

### Site Settings

The following settings can be added to your _config.yml and will be used by the theme.

```yaml
google_analytics: ""
bs-theme: "light"
nav-bs-theme: "light"
image: ""
```

The following settings are applied in the theme's _config.yml but can also be overridden to ensure the desired layouts and SEO formats are applied to your pages and posts.

```yaml
defaults:
- 
  scope:
    path: ""
  values:
    layout: "page"
    seo_type: "Site"
-
  scope:
    path: "_posts"
  values:
    layout: "post"
    seo_type: "BlogPosting"
    title-bs-theme: "light"
```

#### google_analytics

This value can be set at the Page and/or the Site Level, but the Page Level value will always be taken over the site level. 

**Recommendation:** Set this value at the site level, and then set specific page google_analytics if unique page tracking is desired.

#### bs-theme

This value aligns with the BootStrap [Color Modes](https://getbootstrap.com/docs/5.3/customize/color-modes/) concept. The bs-theme is applied to the body tag by the default layout so this will apply to all pages using the ProBlog theme.

#### nav-bs-theme

This value aligns with the BootStrap [Color Modes](https://getbootstrap.com/docs/5.3/customize/color-modes/) concept and is applied to the top navigation area. The nav-bs-theme is applied to the outermost `div` tag in the navigation include file which also has the `blog-header-outer` class applied to it.

#### image

This value is used when sharing posts to social media sites if the page does not have an image defined in the FrontMatter portion. This ensure that all social media posts have an image associated with them when you perform the share.

## Contributing

Bug reports and pull requests are welcome on GitHub at https://github.com/dmcwee/problog. This project is intended to be a safe, welcoming space for collaboration, and contributors are expected to adhere to the [Contributor Covenant](https://www.contributor-covenant.org/) code of conduct.

## Development

To set up your environment to develop this theme, run `bundle install`.

Your theme is setup just like a normal Jekyll site! To test your theme, run `bundle exec jekyll serve` and open your browser at `http://localhost:4000`. This starts a Jekyll server using your theme. Add pages, documents, data, etc. like normal to test your theme's contents. As you make modifications to your theme and to your content, your site will regenerate and you should see the changes in the browser after a refresh, just like normal.

When your theme is released, only the files in `_layouts`, `_includes`, `_sass` and `assets` tracked with Git will be bundled.
To add a custom directory to your theme-gem, please edit the regexp in `problog.gemspec` accordingly.

## License

The theme is available as open source under the terms of the [MIT License](https://opensource.org/licenses/MIT).
