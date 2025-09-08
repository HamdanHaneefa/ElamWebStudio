# Google Analytics Setup Instructions

## 🚀 Setting Up Google Analytics for ElamWebStudio

This website is pre-configured with Google Analytics 4 (GA4) tracking. Follow these steps to complete the setup:

### 1. Create Google Analytics Account

1. Go to [Google Analytics](https://analytics.google.com/)
2. Sign in with your Google account
3. Click "Start measuring"
4. Enter your account name: `ElamWebStudio`
5. Choose your data sharing settings
6. Click "Next"

### 2. Set Up Property

1. Enter Property name: `ElamWebStudio Website`
2. Select your reporting time zone: `India Standard Time`
3. Select your currency: `Indian Rupee (INR)`
4. Click "Next"

### 3. Configure Business Information

1. Select industry category: `Technology` or `Professional Services`
2. Select business size: Choose appropriate size
3. Select how you plan to use Analytics:
   - ✅ Get insights into your customers
   - ✅ Measure advertising ROI
   - ✅ Examine user behavior
4. Click "Create"

### 4. Set Up Data Stream

1. Choose platform: "Web"
2. Enter your website URL: `https://yourdomain.com`
3. Enter stream name: `ElamWebStudio Main Site`
4. Click "Create stream"

### 5. Get Your Measurement ID

After creating the data stream, you'll see your **Measurement ID** (format: G-XXXXXXXXXX)

### 6. Update Your Website

Replace `GA_MEASUREMENT_ID` in the following files with your actual Measurement ID:

#### In `index.html`:
```html
<!-- Replace GA_MEASUREMENT_ID with your actual ID -->
<script async src="https://www.googletagmanager.com/gtag/js?id=YOUR_MEASUREMENT_ID"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'YOUR_MEASUREMENT_ID', {
    page_title: document.title,
    page_location: window.location.href,
    send_page_view: true
  });
</script>
```

#### In `src/utils/analytics.js`:
```javascript
// Replace with your actual Google Analytics Measurement ID
export const GA_MEASUREMENT_ID = 'YOUR_MEASUREMENT_ID';
```

### 7. What's Already Tracked

The website automatically tracks:

- **Page Views**: When users visit different sections
- **Navigation Clicks**: When users click menu items
- **Button Clicks**: CTA buttons and important interactions
- **Form Submissions**: Contact form submissions
- **Scroll Depth**: 25%, 50%, 75%, and 100% scroll tracking
- **Section Views**: When users scroll to different sections
- **Service Inquiries**: Lead generation tracking
- **External Link Clicks**: Links to external websites

### 8. Custom Events Being Tracked

1. **Navigation Events**:
   - Event: `click`
   - Category: `Button`
   - Label: `{Button Name} - Navigation`

2. **Form Submissions**:
   - Event: `submit`
   - Category: `Form`
   - Label: `Contact Form`

3. **Section Views**:
   - Event: `view_section`
   - Category: `Section View`
   - Label: `{Section Name}`

4. **Scroll Tracking**:
   - Event: `scroll`
   - Category: `Scroll Depth`
   - Label: `{Percentage}%`

5. **Service Inquiries**:
   - Event: `generate_lead`
   - Category: `Service Inquiry`
   - Value: Service value

### 9. Enhanced E-commerce Setup (Optional)

For tracking service inquiries as conversions:

1. In Google Analytics, go to **Admin** > **Conversions**
2. Click **Create conversion event**
3. Add `generate_lead` as a conversion event
4. This will track when users submit service inquiries

### 10. Real-time Testing

1. Open your website
2. In Google Analytics, go to **Reports** > **Realtime**
3. Navigate around your site and verify events are being tracked
4. Check that page views, clicks, and scrolls are recorded

### 11. Set Up Goals & Audiences

#### Goals to Set Up:
- **Contact Form Submissions**: Track form completions
- **Service Page Views**: Track interest in specific services
- **Pricing Page Engagement**: Track pricing interest
- **Scroll Depth Goals**: Track engaged users

#### Audiences to Create:
- **Engaged Users**: Users who scroll >75%
- **Potential Leads**: Users who visit pricing or contact pages
- **Service Interested**: Users who view service pages
- **Return Visitors**: Users who visit multiple times

### 12. Custom Dimensions (Advanced)

Consider setting up custom dimensions for:
- **User Type**: New vs Returning
- **Service Interest**: Which services users are interested in
- **Device Category**: Mobile vs Desktop behavior
- **Traffic Source**: How users found your site

### 13. Regular Monitoring

Set up regular monitoring for:
- **Bounce Rate**: Track engagement quality
- **Conversion Rate**: Track form submissions
- **Page Load Speed**: Monitor site performance
- **User Flow**: See how users navigate your site

### 14. GDPR Compliance

Make sure to:
- Add cookie consent banner if targeting EU users
- Update privacy policy to mention Google Analytics
- Implement IP anonymization (already configured)
- Allow users to opt-out of tracking

### 15. Troubleshooting

If events aren't showing:
1. Check browser console for errors
2. Verify Measurement ID is correct
3. Check that gtag is loaded properly
4. Use Google Analytics Debugger Chrome extension
5. Check Real-time reports for immediate feedback

---

## 📊 Analytics Features Included

### Automatic Tracking
- ✅ Page views with dynamic titles
- ✅ Section visibility tracking
- ✅ Form submissions
- ✅ Button clicks
- ✅ Navigation tracking
- ✅ Scroll depth measurement
- ✅ Mobile vs desktop usage

### SEO Integration
- ✅ Structured data for better search visibility
- ✅ Open Graph tags for social sharing
- ✅ Canonical URLs
- ✅ Geo-targeting for Indian market
- ✅ Rich snippets support

### Performance Tracking
- ✅ User engagement metrics
- ✅ Conversion tracking
- ✅ Lead generation monitoring
- ✅ Service inquiry tracking

---

**Need Help?** Contact the development team for assistance with Google Analytics setup and configuration.
