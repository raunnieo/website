# Software Requirements Specification (SRS) for SEHPAATHI

## 1. Introduction

### 1.1 Purpose
This document outlines the software requirements for SEHPAATHI, a web-based platform designed to facilitate student engagement and automate attendance tracking in various educational settings, including in-person, online, and hybrid classes.

### 1.2 Project Scope
SEHPAATHI aims to provide a comprehensive solution for educational institutions to enhance student participation and streamline administrative tasks related to attendance management.

### 1.3 Definitions, Acronyms, and Abbreviations
- SEHPAATHI: The name of the web application (meaning not specified in provided documents)
- SRS: Software Requirements Specification

## 2. Overall Description

### 2.1 Product Perspective
SEHPAATHI is a standalone web application that integrates with Firebase for authentication and data management. It offers a user-friendly interface for both educators and students to interact with the platform.

### 2.2 Product Features
- User authentication (sign-up, sign-in, password recovery)
- Dashboard for managing classes and attendance
- Student engagement tools (specifics not detailed in provided documents)
- Automated attendance tracking system

### 2.3 User Classes and Characteristics
- Students: Primary users who will engage with the platform for attendance and participation
- Educators: Users who will manage classes, track attendance, and utilize engagement tools
- Administrators: Users who oversee the system and manage user accounts

### 2.4 Operating Environment
- Web-based application accessible through standard web browsers
- Backend powered by Firebase for authentication and data storage

### 2.5 Design and Implementation Constraints
- Must be compatible with modern web browsers
- Responsive design for access on various devices (desktop, tablet, mobile)
- Integration with Firebase services for backend functionality

### 2.6 Assumptions and Dependencies
- Users have access to devices with internet connectivity
- Firebase services are available and functioning

## 3. Specific Requirements

### 3.1 External Interface Requirements

#### 3.1.1 User Interfaces
1. Home Page
   - Navigation menu with links to Home, About, Dashboard, Announcements, Sign In, and Sign Up
   - Hero section with a brief description of the platform
   - Call-to-action for sign-up

2. About Page
   - Information about the company's story, mission, and contact details

3. Dashboard Page
   - Requires user authentication
   - Interface for managing classes and attendance (specifics not detailed)

4. Announcements Page
   - Section for displaying important notifications or updates

5. Sign In Page
   - Email and password input fields
   - "Remember me" option
   - Google Sign-In integration
   - Link to password recovery
   - Link to sign-up page for new users

6. Sign Up Page
   - Fields for new user registration (email and password at minimum)
   - Link to sign-in page for existing users

#### 3.1.2 Hardware Interfaces
- Not explicitly specified, assumes standard input devices (keyboard, mouse, touchscreen)

#### 3.1.3 Software Interfaces
- Firebase Authentication API
- Firebase Analytics API

#### 3.1.4 Communications Interfaces
- HTTPS for secure data transmission

### 3.2 Functional Requirements

#### 3.2.1 User Authentication
- FR1: The system shall allow users to sign up using email and password
- FR2: The system shall allow users to sign in using email and password
- FR3: The system shall provide Google Sign-In as an alternative authentication method
- FR4: The system shall allow users to recover forgotten passwords
- FR5: The system shall redirect authenticated users to the dashboard

#### 3.2.2 Dashboard
- FR6: The system shall provide a dashboard interface for authenticated users
- FR7: The dashboard shall display relevant information and tools for managing classes and attendance (specifics to be determined)

#### 3.2.3 Attendance Tracking
- FR8: The system shall provide tools for automated attendance tracking (specifics to be determined)

#### 3.2.4 Student Engagement
- FR9: The system shall offer features to enhance student engagement in various class settings (specifics to be determined)

### 3.3 Non-Functional Requirements

#### 3.3.1 Performance
- NFR1: The system shall load pages within 3 seconds under normal network conditions

#### 3.3.2 Security
- NFR2: All communications between the client and server shall be encrypted using HTTPS
- NFR3: User passwords shall be securely hashed and stored
- NFR4: The system shall implement proper authentication checks for accessing protected resources

#### 3.3.3 Usability
- NFR5: The user interface shall be responsive and accessible on devices with various screen sizes
- NFR6: The system shall provide clear error messages and guidance for user actions

#### 3.3.4 Reliability
- NFR7: The system shall be available 99.9% of the time, excluding scheduled maintenance

#### 3.3.5 Scalability
- NFR8: The system shall be designed to handle an increasing number of users and data without significant performance degradation

## 4. System Features

### 4.1 User Account Management
- 4.1.1 Create Account
- 4.1.2 Sign In
- 4.1.3 Password Recovery
- 4.1.4 Google Sign-In Integration

### 4.2 Dashboard
- 4.2.1 View Classes
- 4.2.2 Manage Attendance

### 4.3 Attendance Tracking
- 4.3.1 Automated Attendance Recording
- 4.3.2 Attendance Reports

### 4.4 Student Engagement Tools
- 4.4.1 Interactive Features (to be specified)
- 4.4.2 Participation Tracking

## 5. Other Nonfunctional Requirements

### 5.1 Compliance
- The system shall comply with relevant data protection regulations

### 5.2 Internationalization
- The system shall support multiple languages, with English as the default

## 6. Appendices

### Appendix A: Glossary
- Firebase: A platform developed by Google for creating mobile and web applications
- Google Sign-In: An authentication system that allows users to sign in with their Google accounts

### Appendix B: Analysis Models
- To be developed during the design phase

### Appendix C: Issues List
- Detailed specifications for student engagement tools need to be defined
- Specific features of the dashboard need to be outlined
- Integration with existing school management systems may be required (to be determined)
