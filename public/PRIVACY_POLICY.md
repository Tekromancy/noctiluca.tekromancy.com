# Privacy Policy for Noctiluca Watch Face

**Effective Date:** October 21, 2026  
**Last Updated:** October 21, 2026  
**Developer:** Tekromancy  
**Application:** Noctiluca (Package: `com.noctiluca.watchface`)

---

## 1. Introduction & Core Philosophy
Tekromancy ("we", "us", or "our") develops **Noctiluca** with a strict **zero-data-collection, on-device architecture**.

Noctiluca is an ambient, weather-reactive watch face built purely with Google's declarative **Watch Face Format (WFF v2)** for Wear OS 5 and higher. It operates with zero executable application code (`android:hasCode="false"`), zero third-party software development kits (SDKs), zero remote servers, and zero background analytics or tracking services.

---

## 2. Data Collection and Usage

### A. Zero Personal Data Collected
Noctiluca does **not** collect, store, transmit, or share any personal data, identifiers, device metrics, or user activity.

### B. Device Sensors & Health Metrics
- **Battery Level, Step Count, Heart Rate**: Displayed via native Wear OS system complication and watch face platform expressions. These values are rendered directly by the Wear OS operating system onto the display canvas. The watch face does not log, process, retain, or transmit your sensor readings.
- **Weather Information**: Weather conditions, temperatures, UV index, and precipitation forecasts are supplied directly by the device's default system weather provider (e.g., Google Weather on Wear OS). Noctiluca does not access GPS or network location directly.

### C. Permissions
Noctiluca declares **no special or dangerous permissions**:
- `android.permission.INTERNET`: **NOT requested**. Noctiluca is completely incapable of network communication.
- `ACCESS_FINE_LOCATION` / `ACCESS_COARSE_LOCATION`: **NOT requested**.
- Storage or contacts permissions: **NOT requested**.

---

## 3. Third-Party Services
Noctiluca contains:
- **No advertising libraries or ad trackers**
- **No analytics SDKs** (such as Google Analytics or Firebase)
- **No crash-reporting SDKs**

All system updates and installations are distributed securely through the Google Play Store.

---

## 4. Children’s Privacy
Noctiluca does not collect any information from anyone, including children under the age of 13.

---

## 5. Contact Information
If you have any questions regarding this Privacy Policy, you may contact:
- **Developer**: Tekromancy
- **Repository**: [https://github.com/Tekromancy/noctiluca](https://github.com/Tekromancy/noctiluca)
