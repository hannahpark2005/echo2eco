# 🌍 Echo2Eco

**Full-stack dashboard for bioacoustic anti-poaching monitoring**

Echo2Eco is a full stack web application that simulates a real-time wildlife monitoring system.  
It integrates with machine learning models trained on animal call data to detect potential poaching events and provides rangers with an intuitive dashboard to track alerts, species predictions, and field reports.

## 🚨 Why This Matters

Poaching remains one of the greatest threats to endangered wildlife:

- At least one rhino is killed every 15 hours in Africa.
- Nearly two rangers die every week protecting wildlife.

While camera traps and motion sensors are widely used, they can be costly and limited in detection range.  
**Bioacoustic sensors** offer a low-cost, 360° monitoring alternative. Paired with **machine learning**, AI bioacoustic systems can aid conservationists in classifying animal calls (e.g., distress signals), understanding trends, and responding to threats more quickly.

**Echo2Eco** demonstrates how such a system could be deployed in the field with rangers and researchers in mind.

## 🛠 Features

- **Real-time alerts and mapping**: Displays incoming audio + GPS data from remote sensors on an interactive map.
- **Machine learning integration**: Shows predicted animal species from classification models.
- **Interactive dashboard**:
  - View alerts, species logs, and incident analytics.
  - Submit field reports to supplement ML predictions.
  - Verify alerts for reinforcement learning.
- **User-focused design**: Simple, accessible interface designed for non-technical users.

🌱 Live demo: [echo2eco.web.app](https://echo2eco.web.app/)

## 🔧 Tech Stack

- **Frontend**: ReactJS
- **Backend/Database**: Firebase Firestore
- **ML Models**:
  - Multilayer Perceptron (Keras) – 80% accuracy on simplified animal call dataset
  - Convolutional Neural Network on spectrograms (experimental)
- **Hardware Integration (prototype)**: Arduino + microphone + GPS

**Try a mock scenario**:

1. Go to the **Home** page and find **Recent Alerts**.
2. Locate **Scenario 3 → Sensor 1**.
3. Click the **report icon** (document with checkmark).
4. Submit a mock report — it will appear in the reports table.

## 📊 Example Use Cases

- Detect animal distress calls in protected areas.
- Alert rangers in real time with GPS-linked events.
- Accumulate incident reports by species for trend analysis.
- Incorporate human field reports with automated alerts to improve ML models.

## 🚀 Future Directions

- Train models on **field-relevant acoustic datasets**.
- Use **event-based audio input** for efficiency.
- Expand hardware connectivity (e.g., LoRa, satellite).
- Develop sensor arrays for triangulation of sound sources.
- Integrate renewable energy for long-term deployments.

## 📚 References

- [International Rhino Foundation – State of the Rhino (2024)](https://rhinos.org/about-rhinos/state-of-the-rhino/)
- [National Geographic – Rangers on the Front Lines of Anti-Poaching](https://www.nationalgeographic.com/animals/article/140627-congo-virunga-wildlife-rangers-elephants-rhinos-poaching)

⭐️ _Echo2Eco is a proof-of-concept demonstrating the potential of bioacoustic AI systems in anti-poaching efforts. It was developed as part of my senior project at Phillips Exeter Academy to explore the intersection of computer science, conservation, and social impact._
