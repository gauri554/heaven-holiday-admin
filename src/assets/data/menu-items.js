export const MENU_ITEMS = [
  {
    key: 'general',
    label: 'GENERAL',
    isTitle: true,
  },
  {
    key: 'dashboard',
    label: 'Dashboard',
    icon: 'solar:widget-5-bold-duotone',
    url: '/dashboard',
  },
  {
    key: 'packages',
    label: 'Packages',
    icon: 'solar:backpack-bold-duotone',
    children: [
      {
        key: 'package-list',
        label: 'List',
        url: '/packages/package-list',
        parentKey: 'packages',
      },
      {
        key: 'package-grid',
        label: 'Grid',
        url: '/packages/package-grid',
        parentKey: 'packages',
      },
      {
        key: 'package-details',
        label: 'Details',
        url: '/packages/1',
        parentKey: 'packages',
        children: [
          {
            key: 'package-general-info',
            label: 'General Info',
            url: '/packages/1',
            parentKey: 'package-details',
          },
          {
            key: 'package-itinerary',
            label: 'Itinerary',
            url: '/packages/1/itineraries',
            parentKey: 'package-details',
            children: [
              {
                key: 'itineraries-list',
                label: 'List',
                url: '/packages/1/itineraries/itineraries-list',
                parentKey: 'itineraries',
              },
              {
                key: 'itineraries-edit',
                label: 'Edit',
                url: '/packages/1/itineraries/itineraries-edit',
                parentKey: 'itineraries',
              },
              {
                key: 'itineraries-add',
                label: 'Create',
                url: '/packages/1/itineraries/itineraries-add',
                parentKey: 'itineraries',
              },
            ],
          },
          {
            key: 'package-tour-details',
            label: 'Tour Details',
            url: '/packages/1/tour-details',
            parentKey: 'package-details',
            children: [
              {
                key: 'package-flight-details',
                label: 'Flight',
                url: '/packages/1/tour-details/flights',
                parentKey: 'package-tour-details',
                children: [
                  {
                    key: 'flight-list',
                    label: 'List',
                    url: '/packages/1/tour-details/flights/flight-list',
                    parentKey: 'package-flight-details',
                  },
                  {
                    key: 'flight-add',
                    label: 'Create',
                    url: '/packages/1/tour-details/flights/flifht-add',
                    parentKey: 'package-flight-details',
                  },
                ],
              },
              {
                key: 'package-accommodation-details',
                label: 'Accommodation',
                url: '/packages/1/tour-details/accommodation',
                parentKey: 'package-tour-details',
                children: [
                  {
                    key: 'accomodation-list',
                    label: 'List',
                    url: '/packages/1/tour-details/accomodation/accomodation-list',
                    parentKey: 'package-accomodation-details',
                  },
                  {
                    key: 'accomodation-add',
                    label: 'Create',
                    url: '/packages/1/tour-details/accomodation/accomodation-add',
                    parentKey: 'package-accomodation-details',
                  },
                ],
              },
            ],
          },
          {
            key: 'package-tour-information',
            label: 'Tour Information',
            url: '/packages/1/tour-information',
            parentKey: 'package-details',
            children: [
              {
                key: 'tourinfo-list',
                label: 'List',
                url: '/packages/1/tour-information/tourinfo-list',
                parentKey: 'package-tour-information',
              },
              {
                key: 'tourinfo-add',
                label: 'Create',
                url: '/packages/1//tour-information/tourinfo-add',
                parentKey: 'package-tour-information',
              },
              {
                key: 'tourinfo-edit',
                label: 'Edit',
                url: '/packages/1/tour-information/tourinfo-edit',
                parentKey: 'package-tour-information',
              },
            ],
          },
          {
            key: 'package-pricing-policy',
            label: 'Pricing & Policy',
            url: '/packages/1/pricing-policy',
            parentKey: 'package-details',
            children: [
              {
                key: 'policy-add',
                label: 'Create',
                url: '/packages/1/pricing-policy/policy-add',
                parentKey: 'package-pricing-policy',
              },
              {
                key: 'policy-edit',
                label: 'Edit',
                url: '/packages/1/pricing-policy/policy-edit',
                parentKey: 'package-pricing-policy',
              },
            ],
          },
          {
            key: 'package-reviews',
            label: 'Reviews',
            url: '/packages/1/reviews',
            parentKey: 'package-details',
          },
          {
            key: 'package-gallery',
            label: 'Gallery',
            url: '/packages/1/gallery',
            parentKey: 'package-details',
            children: [
              {
                key: 'package-gallery-list',
                label: 'List',
                url: '/packages/1/gallery/gallery-list',
                parentKey: 'package-gallery',
              },
              {
                key: 'package-gallery-add',
                label: 'Create',
                url: '/packages/1/gallery/gallery-add',
                parentKey: 'package-gallery',
              },
            ],
          },
        ],
      },
      {
        key: 'package-edit',
        label: 'Edit',
        url: '/packages/package-edit',
        parentKey: 'packages',
      },
      {
        key: 'package-add',
        label: 'Create',
        url: '/packages/package-add',
        parentKey: 'packages',
      },
    ],
  },
  {
    key: 'category',
    icon: 'solar:clipboard-list-bold-duotone',
    label: 'Category',
    children: [
      {
        key: 'category-list',
        label: 'List',
        url: '/category/category-list',
        parentKey: 'category',
      },
    ],
  },

  {
    key: 'subcategory',
    icon: 'solar:folder-with-files-bold-duotone',
    label: 'Subcategory',
    children: [
      {
        key: 'subcategory-list',
        label: 'List',
        url: '/subcategory/subcategory-list',
        parentKey: 'subcategory',
      },
    ],
  },

  {
    key: 'enquiries',
    label: 'Enquiry',
    icon: 'solar:phone-broken',
    children: [
      {
        key: 'enquiry-list',
        label: 'List',
        url: '/enquiries/enquiry-list',
        parentKey: 'enquiries',
      },
    ],
  },
  {
    key: 'booking',
    label: 'Booking',
    icon: 'ic:baseline-book-online',
    children: [
      {
        key: 'booking-add',
        label: 'Create',
        url: '/booking/booking-add',
        parentKey: 'booking',
      },
      {
        key: 'booking-list',
        label: 'List',
        url: '/booking/booking-list',
        parentKey: 'booking',
      },
    ],
  },
  {
    key: 'banner',
    label: 'Banners',
    icon: 'solar:confetti-minimalistic-bold-duotone',
    children: [
      {
        key: 'banner-add',
        label: 'Create',
        url: '/banner/banner-add',
        parentKey: 'banner',
      },
      {
        key: 'banner-list',
        label: 'List',
        url: '/banner/banner-list',
        parentKey: 'banner',
      },
    ],
  },
  {
    key: 'departure-cities',
    label: 'Departure Cities',
    icon: 'solar:map-point-hospital-bold-duotone',
    children: [
      {
        key: 'city-add',
        label: 'Create',
        url: '/departure-cities/city-add',
        parentKey: 'departure-cities',
      },
      {
        key: 'city-list',
        label: 'List',
        url: '/departure-cities//city-list',
        parentKey: 'departure-cities',
      },
    ],
  },
  {
    key: 'departuredate',
    label: 'Departure Dates',
    icon: 'solar:calendar-bold-duotone',
    children: [
      {
        key: 'departuredate-add',
        label: 'Create',
        url: '/departuredate/departuredate-add',
        parentKey: 'departuredate',
      },
      {
        key: 'departuredate-list',
        label: 'List',
        url: '/departuredate/departuredate-list',
        parentKey: 'departuredate',
      },
    ],
  } /*{
  key: 'invoice',
  label: 'Invoices',
  icon: 'solar:bill-list-bold-duotone',
  children: [{
    key: 'invoice-list',
    label: 'List',
    url: '/invoice/invoice-list',
    parentKey: 'invoice'
  }, {
    key: 'invoice-details',
    label: 'Details',
    url: '/invoice/invoice-details',
    parentKey: 'invoice'
  }, {
    key: 'invoice-add',
    label: 'Create',
    url: '/invoice/invoice-add',
    parentKey: 'invoice'
  }]
},*/,
  {
    key: 'settings',
    label: 'Settings',
    icon: 'solar:settings-bold-duotone',
    url: '/settings',
  },
  {
    key: 'users',
    label: 'USERS',
    isTitle: true,
  },
  // {
  //   key: 'profile',
  //   label: 'Profile',
  //   icon: 'solar:chat-square-like-bold-duotone',
  //   url: '/profile',
  // },
  {
    key: 'role',
    label: 'Roles',
    icon: 'solar:user-speak-rounded-bold-duotone',
    children: [
      {
        key: 'role-add',
        label: 'Create',
        url: '/role/role-add',
        parentKey: 'role',
      },
      {
        key: 'role-list',
        label: 'List',
        url: '/role/role-list',
        parentKey: 'role',
      },
    ],
  },
  {
    key: 'permissions',
    label: 'Permissions',
    icon: 'solar:checklist-minimalistic-bold-duotone',
    url: '/permissions',
  },
  {
    key: 'customer',
    label: 'Customers',
    icon: 'solar:users-group-two-rounded-bold-duotone',
    children: [
      {
        key: 'customer-add',
        label: 'Create',
        url: '/customer/customer-add',
        parentKey: 'customer',
      },
      {
        key: 'customer-list',
        label: 'List',
        url: '/customer/customer-list',
        parentKey: 'customer',
      },
    ],
  },
  {
    key: 'OTHER',
    label: 'OTHER',
    isTitle: true,
  },
  /*{
  key: 'coupons',
  label: 'Coupons',
  icon: 'solar:leaf-bold-duotone',
  children: [{
    key: 'coupons-list',
    label: 'List',
    url: '/coupons/coupons-list',
    parentKey: 'coupons'
  }, {
    key: 'coupons-add',
    label: 'Add',
    url: '/coupons/coupons-add',
    parentKey: 'coupons'
  }]
},*/ {
    key: 'review',
    label: 'Review',
    icon: 'solar:chat-square-like-bold-duotone',
    url: '/review',
  },
  {
    key: 'support',
    label: 'SUPPORT',
    isTitle: true,
  },
  {
    key: 'help-center',
    label: 'Help-Center',
    icon: 'solar:help-bold-duotone',
    url: '/support/help-center',
  },
  {
    key: 'faqs',
    label: 'FAQs',
    icon: 'solar:question-circle-bold-duotone',
    url: '/support/faqs',
  },
  {
    key: 'privacy-policy',
    label: 'Privacy Policy',
    icon: 'solar:document-text-bold-duotone',
    url: '/support/privacy-policy',
  },
]
