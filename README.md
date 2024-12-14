# InkChain Documentation

InkChain is a decentralized content creation platform that empowers content creators to monetize their work in innovative ways. It leverages cutting-edge blockchain technologies to ensure transparency, security, and authenticity in the content creation ecosystem.

### Key Technologies

1. **PADO for Content Creator Attestation**: InkChain utilizes PADO to verify the authenticity of content creators by attesting their follower count on Web2 platforms like Medium. This ensures that only genuine creators are part of the platform.

2. **PADO File Sharing for Secure Content Distribution**: Articles and other content are securely shared using PADO's decentralized file-sharing capabilities, ensuring data integrity and privacy.

### Unique Benefits

InkChain gives creators full freedom to decide how their content is accessed and monetized. By setting their own pricing and terms, creators maintain complete control over their work while reaching a decentralized audience.

---

## Demo
![image](https://github.com/user-attachments/assets/710eeff9-8eab-4031-bef7-658bf53ee4dc)

![image](https://github.com/user-attachments/assets/e75bdd00-7207-4ea8-a86e-c8856913dc1d)

![image](https://github.com/user-attachments/assets/2fd909c9-ca28-4062-bceb-88b404da9ec0)


## Issue With Making Schema For Major Content Creating Platforms

A quick note, I actually wanted to make my own custom schema, via extension. But the link to do that was always down. It created many difficulties for me, so I skipped this part for now. 

![image](https://github.com/user-attachments/assets/3272fbc4-136d-44d8-8ae8-80e6cfb2b131)

---

## Features

1. **Content Creator Verification**:
   - Content creators prove their authenticity by attesting their follower count on platforms like Medium.

2. **Article Publishing**:
   - Verified creators can publish articles with titles, previews, and set a price for full access.

3. **Article Discovery**:
   - Users can browse the latest articles, view headlines, previews, and reviews.

4. **Article Purchase**:
   - Users pay in cryptocurrency to access full articles.

5. **Connect Wallet**:
   - Users connect their crypto wallets to interact with the platform.

6. **Review System**:
   - After purchasing and reading articles, users can leave reviews to help others.

---

## Project Structure

### Directory Layout
```
InkChain/
├── app/
|   ├── globals.css       # Global styles
|   └── tailwind.config.js # Tailwind CSS configuration
├── components/
|   ├── ConnectWalletButton.tsx  # Connect Wallet button component
|   ├── ArticleCard.tsx          # Display individual article details
|   └── ArticleForm.tsx          # Form for publishing articles
├── context/
|   └── WalletContext.tsx      # Wallet connection context
├── pages/
|   ├── index.tsx              # Landing page
|   ├── publish.tsx            # Publish article page
|   └── article/[id].tsx       # Article detail page
├── public/
└── utils/
    └── blockchain.ts          # Blockchain-related utility functions
```

---

## Pages and Functionality

### 1. Landing Page (`index.tsx`)
**Purpose**: Display the latest articles and allow users to connect their wallets.

#### Features:
- **Connect Wallet** button.
- List of latest articles with previews (title, author, price).

---

### 2. Connect Wallet Functionality
**Component**: `ConnectWalletButton.tsx`

---

### 3. Publish Article Page (`publish.tsx`)
**Purpose**: Allow verified content creators to publish new articles.

#### Features:
- Form to enter the article title, content, and price.

---

### 4. Article Detail Page (`article/[id].tsx`)
**Purpose**: Display full article content after payment.

#### Features:
- Show article details.
- Allow users to pay and access content.
- Users can leave reviews.

---

## Utilities

### Blockchain Interaction (`utils/blockchain.ts`)

---

## Development Workflow
1. Clone the repository:
   ```bash
   git clone <repo-url>
   cd InkChain
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Run the development server:
   ```bash
   npm run dev
   ```
4. Access the app at `http://localhost:3000`.

---

## Future Enhancements
- Integration with smart contracts for real blockchain transactions.
- Advanced creator verification using social media APIs.
- Implementing IPFS for decentralized article storage.
- Rating and review analytics.

---

Enjoy building with InkChain!

