# Design Guidelines

{
  "Color System": {
    "Primary": "#0052CC",
    "Secondary": "#172B4D",
    "Accent": "#FF5630",
    "Success": "#36B37E",
    "Error": "#FF5630",
    "Warning": "#FFAB00",
    "Background": "#FAFBFC",
    "Surface": "#FFFFFF",
    "Text": {
      "Primary": "#172B4D",
      "Secondary": "#6B778C",
      "OnPrimary": "#FFFFFF"
    }
  },
  "Typography": {
    "Font Families": {
      "Primary": "'Roboto', sans-serif",
      "Secondary": "'Lato', sans-serif"
    },
    "Font Sizes": {
      "Title": "24px",
      "Heading": "18px",
      "Body": "14px",
      "Caption": "12px"
    },
    "Line Heights": {
      "Title": "1.5",
      "Heading": "1.5",
      "Body": "1.5",
      "Caption": "1.5"
    },
    "Font Weights": {
      "Light": "300",
      "Regular": "400",
      "Medium": "500",
      "Bold": "700"
    }
  },
  "Spacing": {
    "Margin and Padding Scales": "8px, 16px, 24px, 32px, 40px",
    "Grid System": "12-column grid",
    "Component Spacing": "8px"
  },
  "Components": {
    "Button Styles": {
      "Primary": {
        "Background": "#0052CC",
        "Text": "#FFFFFF",
        "Border": "None"
      },
      "Secondary": {
        "Background": "transparent",
        "Text": "#0052CC",
        "Border": "1px solid #0052CC"
      }
    },
    "Input Styles": {
      "Border": "2px solid #6B778C",
      "Focused": {
        "Border": "2px solid #0052CC"
      },
      "Error": {
        "Border": "2px solid #FF5630"
      }
    },
    "Card Styles": {
      "Background": "#FFFFFF",
      "Shadow": "0px 4px 8px rgba(0,0,0,0.1)"
    },
    "Form Styles": {
      "Label": {
        "Font Size": "14px",
        "Color": "#6B778C"
      },
      "Input": {
        "Font Size": "14px",
        "Border Radius": "4px"
      }
    },
    "Navigation Styles": {
      "Background": "#172B4D",
      "Link": {
        "Text": "#FFFFFF",
        "Hover": "#FFAB00"
      }
    }
  },
  "Animations": {
    "Transitions": "ease-in-out 0.3s",
    "Hover Effects": {
      "Button": "background-color ease-in-out 0.2s",
      "Card": "box-shadow ease-in-out 0.3s"
    },
    "Loading States": {
      "Spinner": "spin 2s linear infinite"
    },
    "Page Transitions": "fade 0.5s ease-out"
  },
  "Responsive Design": {
    "Breakpoints": {
      "Small": "320px",
      "Medium": "768px",
      "Large": "1024px",
      "Extra Large": "1440px"
    },
    "Mobile-first Approach": "true",
    "Grid System Adaptations": {
      "Small": "4-column grid",
      "Medium": "8-column grid",
      "Large": "12-column grid"
    },
    "Component Adaptations": {
      "Buttons": {
        "Small": {
          "Padding": "8px 16px"
        },
        "Medium": {
          "Padding": "12px 24px"
        }
      }
    }
  }
}