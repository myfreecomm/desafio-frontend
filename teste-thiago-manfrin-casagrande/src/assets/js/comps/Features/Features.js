import Bullet from './Bullet';

const featuresItems = [
  'Filterable Portfolio with Pagination',
  '3 Custom Widgets (Twitter, Flickr, Video)',
  'Theme Options Panel',
  'Like Counter for Portfolio & Blog Items',
  'Wordpress 3.0+ Ready (Menus & Featured Images)',
  'Page Temaplates (Archives, Contact Form, Quote Form, Faq)',
  'Shortcode Generator (Columns, Buttons, Toggles, Tabs, Alerts, Headings)',
  'Full Localisation Support (contains .po/ .mo files)',
  'HTML 5 Valid Code',
  'Support Forum',
  'Layered PSDs for Customization',
  'The Best Documentation in the industry'
];

const bulletsItems = [
  { title: 'Widgets & Shortcodes', icon: 'engine', text: 'Comes with 3 custom widgets and tons of shortcodes to help you create amazing posts.' },
  { title: 'Filterable Portfolio', icon: 'star', text: 'Comes with 3 custom widgets and tons of shortcodes to help you create amazing posts.' },
  { title: 'Top Notch Documentation', icon: 'search', text: 'Comes with 3 custom widgets and tons of shortcodes to help you create amazing posts.' },
];

const Features = () => {
  return(`
    <section class="page-section features">
      <div class="page-section__body">
        <div class="features-container">
          <div class="features__info">
            <h1 class="features-info__title">Theme Features</h1>
            <ul class="features-info__list">
              ${ featuresItems.map((item) => `<li class="features-info-list__item">${ item }<li>`).join('') }
            </ul>
          </div>
          <div class="features__img"></div>
        </div>
        <div class="bullets">
          ${ bulletsItems.map((bullet) => Bullet(bullet.title, bullet.icon, bullet.text)).join('') }
        </div>
        <div class="input-group">
          <input class="input--text" type="text" placeholder="Enter your email address to get free updates..." />
          <button class="btn btn--primary">Sign Me Up</button>
        </div>
      </div>
    </section>
  `);
}

export default Features;
