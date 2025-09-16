# Multilingual Health Chatbot - Wireframe Design

## Application Overview
A comprehensive multilingual health assistant supporting English and 6 Indian regional languages (Hindi, Telugu, Tamil, Bengali, Marathi, Gujarati) with AI-powered symptom analysis, disease information, doctor finder, emergency assistance, and treatment tracking.

## Screen Flow Architecture

```
┌─────────────────┐
│ Language        │
│ Selection       │
│ (Initial)       │
└─────────┬───────┘
          │
          ▼
┌─────────────────┐
│ Main Menu       │◄──────────┐
│ (Hub)           │           │
└─────┬───────────┘           │
      │                       │
      ├─── Symptoms ──┐        │
      │               ▼        │
      │         ┌─────────┐    │
      │         │ Disease │    │
      │         │ Results │────┘
      │         └─────────┘
      │
      ├─── Doctors ───────────┘
      │
      ├─── Emergency ─────────┘
      │
      └─── Treatment ─────────┘
```

---

## 1. Language Selection Screen

```
┌─────────────────────────────────────────┐
│                                         │
│               [🌐 Globe Icon]            │
│                                         │
│        Select Your Preferred Language   │
│           Choose a language to continue │
│                                         │
│  ┌─────────────────────────────────────┐ │
│  │ 🇺🇸  English                      │ │
│  └─────────────────────────────────────┘ │
│  ┌─────────────────────────────────────┐ │
│  │ 🇮🇳  हिन्दी                         │ │
│  └─────────────────────────────────────┘ │
│  ┌─────────────────────────────────────┐ │
│  │ 🇮🇳  తెలుగు                        │ │
│  └─────────────────────────────────────┘ │
│  ┌─────────────────────────────────────┐ │
│  │ 🇮🇳  தமிழ்                         │ │
│  └─────────────────────────────────────┘ │
│  ┌─────────────────────────────────────┐ │
│  │ 🇮🇳  বাংলা                         │ │
│  └─────────────────────────────────────┘ │
│  ┌─────────────────────────────────────┐ │
│  │ 🇮🇳  मराठी                         │ │
│  └─────────────────────────────────────┘ │
│  ┌─────────────────────────────────────┐ │
│  │ 🇮🇳  ગુજરાતી                       │ │
│  └─────────────────────────────────────┘ │
│                                         │
└─────────────────────────────────────────┘
```

**Features:**
- Clean, centered layout with globe icon
- Flag emojis for visual language identification
- Large, accessible buttons for easy selection
- Native script display for regional languages

---

## 2. Main Menu Screen

```
┌─────────────────────────────────────────┐
│                                         │
│              [❤️ Health Icon]            │
│                                         │
│          Welcome to Health Assistant    │
│           How can I help you today?     │
│                                         │
│  ┌─────────────────────────────────────┐ │
│  │ [🩺] Check Symptoms                │ │
│  │      AI-powered symptom analysis    │ │
│  └─────────────────────────────────────┘ │
│                                         │
│  ┌─────────────────────────────────────┐ │
│  │ [📚] Disease Information           │ │
│  │      WHO & CDC verified information │ │
│  └─────────────────────────────────────┘ │
│                                         │
│  ┌─────────────────────────────────────┐ │
│  │ [📍] Find Nearby Doctors           │ │
│  │      Locate nearby medical facilities│ │
│  └─────────────────────────────────────┘ │
│                                         │
│  ┌─────────────────────────────────────┐ │
│  │ [⚠️] Emergency Help                │ │
│  │      Immediate medical assistance   │ │
│  └─────────────────────────────────────┘ │
│                                         │
│  ┌─────────────────────────────────────┐ │
│  │ [📊] Treatment Tracker             │ │
│  │      Monitor your health progress   │ │
│  └─────────────────────────────────────┘ │
│                                         │
└─────────────────────────────────────────┘
```

**Features:**
- Heart icon branding
- Color-coded feature cards with icons
- Clear feature descriptions
- Single-tap navigation to all major features

---

## 3. Symptom Checker Screen

```
┌─────────────────────────────────────────┐
│ [←] Describe Your Symptoms              │
│                                         │
│  Type your symptoms or tap microphone   │
│  to speak                               │
│                                         │
│  ┌─────────────────────────────────────┐ │
│  │                                     │ │
│  │ I have a headache and fever...      │ │
│  │                                     │ │
│  │                                     │ │
│  │                                     │ │
│  └─────────────────────────────────────┘ │
│                                         │
│  ┌─────────────────┐ ┌─────────────────┐ │
│  │ [🎤] Start      │ │ [📤] Analyze   │ │
│  │    Recording    │ │    Symptoms     │ │
│  └─────────────────┘ └─────────────────┘ │
│                                         │
│  [Recording indicator when active]       │
│  ● Recording... [Stop Recording]        │
│                                         │
└─────────────────────────────────────────┘
```

**Analysis Loading State:**
```
┌─────────────────────────────────────────┐
│              [🧠 Brain Icon]             │
│                                         │
│         Analyzing your symptoms...       │
│      Please wait while we check         │
│         possible conditions             │
│                                         │
│  ████████████████████████████▒▒▒▒ 85%   │
│                                         │
│              [⚡] Analyzing...           │
│                                         │
└─────────────────────────────────────────┘
```

**Features:**
- Large text input area
- Voice recording with visual feedback
- Real-time recording status
- Progress indicator during analysis
- Back navigation

---

## 4. Disease Results Screen

```
┌─────────────────────────────────────────┐
│ [←] Analysis Results                    │
│                                         │
│  ┌─────────────────────────────────────┐ │
│  │ Most likely condition:              │ │
│  │                                     │ │
│  │ Common Cold               [🟡 Medium]│ │
│  │                                     │ │
│  │ A viral infection affecting the     │ │
│  │ upper respiratory tract             │ │
│  │                                     │ │
│  │ [🔊] Listen   [📍] Find Clinic     │ │
│  └─────────────────────────────────────┘ │
│                                         │
│  ┌─────────────────────────────────────┐ │
│  │ [ℹ️] View Detailed Information      │ │
│  │                                     │ │
│  │ [Causes] [Prevention] [Treatment]   │ │
│  │                                     │ │
│  │ • Viral infection                   │ │
│  │ • Weakened immune system            │ │
│  │ • Close contact with infected       │ │
│  │                                     │ │
│  └─────────────────────────────────────┘ │
│                                         │
└─────────────────────────────────────────┘
```

**High Urgency Emergency State:**
```
┌─────────────────────────────────────────┐
│ [←] Analysis Results                    │
│                                         │
│  ┌─────────────────────────────────────┐ │
│  │ Most likely condition:       [🔴 HIGH]│ │
│  │                                     │ │
│  │ Possible Heart Condition            │ │
│  │                                     │ │
│  │ [⚠️] This condition requires        │ │
│  │     immediate medical attention     │ │
│  │                                     │ │
│  │ [🚨] EMERGENCY   [📍] Find Clinic  │ │
│  └─────────────────────────────────────┘ │
│                                         │
│  [⚠️] EMERGENCY ALERT                   │
│  This condition requires immediate       │
│  medical attention. Please seek help    │
│  immediately.                           │
│                                         │
└─────────────────────────────────────────┘
```

**Features:**
- Color-coded urgency levels (Green/Yellow/Red)
- Audio playback of results
- Tabbed detailed information
- Smart routing (Emergency vs. Normal clinic finder)
- Warning alerts for high-urgency conditions

---

## 5. Doctor Finder Screen

```
┌─────────────────────────────────────────┐
│ [←] Nearby Medical Facilities           │
│                                         │
│  ┌─────────────────────────────────────┐ │
│  │ [📍] Your Location: New York, NY    │ │
│  └─────────────────────────────────────┘ │
│                                         │
│  ┌─────────────────────────────────────┐ │
│  │           [Map Visualization]        │ │
│  │              [📍] You               │ │
│  │          [🏥] [🏥] [🏥]             │ │
│  │       Interactive Map Showing        │ │
│  │       Nearby Medical Facilities      │ │
│  └─────────────────────────────────────┘ │
│                                         │
│  ┌─────────────────────────────────────┐ │
│  │ [🏥] City General Hospital          │ │
│  │      ⭐ 4.5  •  0.8 km  •  [24h]   │ │
│  │      Emergency Care, Cardiology     │ │
│  │      Wait time: 15 min              │ │
│  │                                     │ │
│  │      [📞] Call    [🧭] Directions  │ │
│  └─────────────────────────────────────┘ │
│                                         │
│  ┌─────────────────────────────────────┐ │
│  │ [🏥] HealthCare Plus Clinic         │ │
│  │      ⭐ 4.3  •  1.2 km             │ │
│  │      General Practice, Pediatrics   │ │
│  │      Wait time: 25 min              │ │
│  │                                     │ │
│  │      [📞] Call    [🧭] Directions  │ │
│  └─────────────────────────────────────┘ │
│                                         │
└─────────────────────────────────────────┘
```

**Features:**
- Location display and verification
- Interactive map with facility markers
- Facility cards with key information:
  - Name and type
  - Star ratings and distance
  - Specialties and wait times
  - 24/7 indicators
- Direct call and navigation buttons
- Scrollable list of nearby facilities

---

## 6. Emergency Screen

```
┌─────────────────────────────────────────┐
│ [←] 🚨 EMERGENCY ALERT                  │
│                                         │
│              [⚠️ Alert Icon]            │
│                                         │
│        EMERGENCY ALERT                  │
│                                         │
│  Your symptoms suggest a critical       │
│  condition that requires immediate      │
│  medical attention                      │
│                                         │
│  ┌─────────────────────────────────────┐ │
│  │        [📞] CALL 911               │ │
│  │      Emergency Services             │ │
│  └─────────────────────────────────────┘ │
│                                         │
│  [⏰] Auto-Call Emergency (10s)         │
│  ██████████▒▒▒▒▒▒▒▒▒▒ (Countdown)        │
│                                         │
│  ┌─────────────────────────────────────┐ │
│  │ [🏥] Call Nearest Hospital         │ │
│  │      City General (0.8 km)         │ │
│  └─────────────────────────────────────┘ │
│                                         │
│  ┌─────────────────────────────────────┐ │
│  │ [🚑] Call Ambulance                │ │
│  │      Metro Ambulance Service        │ │
│  └─────────────────────────────────────┘ │
│                                         │
│  ┌─────────────────────────────────────┐ │
│  │ [📍] Share Live Location           │ │
│  │      Send GPS to responders    [✓] │ │
│  └─────────────────────────────────────┘ │
│                                         │
└─────────────────────────────────────────┘
```

**Features:**
- High-contrast red theme for urgency
- Large emergency call button
- Auto-dial countdown with cancel option
- Quick access to hospitals and ambulance
- Location sharing with confirmation
- Emergency contact directory

---

## 7. Treatment Tracker Screen

```
┌─────────────────────────────────────────┐
│ [←] Treatment Status Tracker            │
│                                         │
│  ┌─────────────────────────────────────┐ │
│  │            Health Overview           │ │
│  │                                     │ │
│  │    [2]         [1]         [85%]    │ │
│  │   Active    Completed    Overall     │ │
│  │ Treatments    Treatments   Progress  │ │
│  └─────────────────────────────────────┘ │
│                                         │
│  ┌─────────────────────────────────────┐ │
│  │ [🔵] Hypertension Management  [75%] │ │
│  │                                     │ │
│  │ ████████████████████▒▒▒▒▒▒▒▒ 75%    │ │
│  │                                     │ │
│  │ [📅] Started: Jan 15, 2024          │ │
│  │ [💊] Lisinopril 10mg, HCTZ 25mg     │ │
│  │ [📝] BP improving. Continue meds     │ │
│  │                                     │ │
│  │ Update Progress:                    │ │
│  │ [✅ Completed] [❤️ Healthy]        │ │
│  └─────────────────────────────────────┘ │
│                                         │
│  ┌─────────────────────────────────────┐ │
│  │ [🟢] Common Cold Recovery    [100%] │ │
│  │                                     │ │
│  │ ████████████████████████████ 100%   │ │
│  │                                     │ │
│  │ [📅] Started: Jan 28, 2024          │ │
│  │ [💊] Rest, Fluids, Throat lozenges  │ │
│  │ [📝] Fully recovered after 7 days   │ │
│  └─────────────────────────────────────┘ │
│                                         │
│  ┌─────────────────────────────────────┐ │
│  │ [➕] Add New Treatment Record       │ │
│  └─────────────────────────────────────┘ │
│                                         │
└─────────────────────────────────────────┘
```

**Features:**
- Health overview dashboard with key metrics
- Progress bars for each treatment
- Color-coded status indicators:
  - Blue: In Process
  - Green: Completed
  - Emerald: Healthy
- Detailed treatment information:
  - Start dates and timelines
  - Medication tracking
  - Progress notes
- Status update buttons
- Add new treatment capability

---

## Design System Specifications

### Color Scheme
```
Primary Colors:
- Blue (#3B82F6): General actions, in-progress states
- Green (#10B981): Completed states, healthy status
- Red (#EF4444): Emergency alerts, high urgency
- Yellow (#F59E0B): Medium urgency warnings
- Emerald (#059669): Optimal health states

Background:
- Light: Gradient from blue-50 to green-50
- Cards: White with subtle shadows
- Emergency: Red-50 background for alerts
```

### Typography Hierarchy
```
H1: 2xl - Main screen titles
H2: xl - Section headers  
H3: lg - Card titles
H4: base - Subsection headers
Body: base - General content
Small: sm - Helper text, metadata
```

### Icon System
```
🌐 - Language/Global
❤️ - Health/Medical
🩺 - Symptoms/Diagnosis
📚 - Information/Education
📍 - Location/Navigation
⚠️ - Alerts/Warning
📊 - Analytics/Tracking
🧠 - AI/Analysis
🔊 - Audio/Voice
📞 - Phone/Communication
🚑 - Emergency/Ambulance
🏥 - Hospital/Medical Facility
```

### Responsive Design
```
Mobile-First Approach:
- Max-width: 2xl (672px) for optimal mobile experience
- Touch-friendly buttons (min 44px height)
- Adequate spacing between interactive elements
- Large text areas for accessibility
- Swipe gestures for navigation (future enhancement)
```

---

## User Experience Flow

### Happy Path Journey:
1. **Language Selection** → User selects preferred language
2. **Main Menu** → User chooses "Check Symptoms"
3. **Symptom Input** → User describes symptoms via text/voice
4. **AI Analysis** → System processes symptoms with loading feedback
5. **Results Display** → Shows diagnosis with appropriate urgency level
6. **Action Selection** → User chooses to find nearby doctors or get more info
7. **Doctor Finder** → Displays nearby facilities with contact options
8. **Treatment Tracking** → User can later track recovery progress

### Emergency Path Journey:
1. **Symptom Analysis** → High urgency condition detected
2. **Automatic Redirect** → System immediately shows emergency screen
3. **Emergency Actions** → User can quickly call 911, ambulance, or hospital
4. **Location Sharing** → GPS coordinates shared with emergency services
5. **Follow-up Tracking** → Treatment status monitored post-emergency

### Multilingual Experience:
- All text content translates based on selected language
- Cultural adaptation for medical terminology
- Right-to-left support ready for future Arabic expansion
- Voice recognition supports native language input
- Text-to-speech in selected language for accessibility

This wireframe design ensures a comprehensive, accessible, and culturally-aware health assistance platform that can serve diverse populations effectively.