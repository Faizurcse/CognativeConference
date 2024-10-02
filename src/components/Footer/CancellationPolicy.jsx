import React from "react";
import Header from "../Header/Header.jsx";
import Footer from "../Footer/Footer.jsx";

const CancellationPolicy = () => {
  return (
    <div>
      <div style={{ backgroundColor: "var(--black)" }}>
        <Header />
      </div>
      <div style={styles.container}>
        <h1 style={styles.heading}>
          Cancellation Policy for Stripe Conferences
        </h1>

        <section style={styles.section}>
          <a
            href="https://www.cognitivetechsummit.com"
            target="_blank"
            rel="noopener noreferrer"
            style={styles.link}
          >
            https://www.cognitivetechsummit.com
          </a>
          <h2 style={styles.subheading}>Cancellation by Stripe Conferences</h2>
          <p style={styles.paragraph}>
            If Stripe Conferences cancels this event for any reason, you will
            receive a credit for 100% of the registration fee paid. You may use
            this credit for another Stripe Conferences event which must occur
            within one year from the date of cancellation.
          </p>
        </section>

        <section style={styles.section}>
          <h2 style={styles.subheading}>Postponement</h2>
          <p style={styles.paragraph}>
            If Stripe Conferences postpones an event for any reason and you are
            unable or unwilling to attend on rescheduled dates, you will receive
            a credit for 100% of the registration fee paid. You may use this
            credit for another Stripe Conferences event which must occur within
            one year from the date of postponement.
          </p>
        </section>

        <section style={styles.section}>
          <h2 style={styles.subheading}>Transfer of Registration</h2>
          <p style={styles.paragraph}>
            All fully paid registrations are transferable to other persons from
            the same organization, if the registered person is unable to attend
            the event. Transfers must be made by the registered person in
            writing to{" "}
            <a href="mailto:support@stripeconferences.com" style={styles.link}>
              support@stripeconferences.com
            </a>
            . Details must include the full name of the replacement person,
            their title, contact phone number, and email address. All other
            registration details will be assigned to the new person unless
            otherwise specified.
          </p>
          <p style={styles.paragraph}>
            Registration can be transferred to one conference to another
            conference of Stripe Conferences if the person is unable to attend
            one of the conferences. However, Registration cannot be transferred
            if it is intimated within 14 days of the respective conference. The
            transferred registrations will not be eligible for a refund.
          </p>
        </section>

        <section style={styles.section}>
          <h2 style={styles.subheading}>Visa Information</h2>
          <p style={styles.paragraph}>
            Keeping in view of increased security measures, we would like to
            request all the participants to apply for a Visa as soon as
            possible.
          </p>
          <p style={styles.paragraph}>
            Stripe Conferences will not directly contact embassies and
            consulates on behalf of visa applicants. All delegates or invitees
            should apply for a Business Visa only.
          </p>
          <p style={styles.paragraph}>
            Important note for failed visa applications: Visa issues cannot come
            under the consideration of the cancellation policy of Stripe
            Conferences, including the inability to obtain a visa.
          </p>
        </section>

        <section style={styles.section}>
          <h2 style={styles.subheading}>Venue Policy</h2>
          <p style={styles.paragraph}>
            Due to fluctuating participant numbers, the hotel address provided
            may undergo changes. This adaptability ensures attendees receive
            updated information, maintaining smooth logistics and convenience.
          </p>
          <p style={styles.paragraph}>
            Flexibility in addressing such fluctuations underscores the
            organizers’ commitment to ensuring a seamless experience for all
            attendees, regardless of last-minute adjustments.
          </p>
        </section>

        <section style={styles.section}>
          <h2 style={styles.subheading}>Refund/ Cancellation Policy</h2>
          <p style={styles.paragraph}>
            Customer will receive refund amount to their respective payment
            methods in 7 to 10 working days and will reflect in their bank
            account / credit / debit cards based on their Bank’s policies.
          </p>
          <p style={styles.paragraph}>
            If the registrant is unable to attend, and is not in a position to
            transfer his/her participation to another person or event, then the
            following refund arrangements apply:
          </p>
          <ul style={styles.list}>
            <li>
              Before 60 days of the conference: Eligible for Full Refund less
              $200 service Fee
            </li>
            <li>
              Within 60-30 days of Conference: Eligible for 50% of payment
              Refund
            </li>
            <li>Within 30 days of Conference: Not eligible for Refund</li>
            <li>
              E-Poster, video presentations & Discounted Payments will not be
              refunded.
            </li>
          </ul>
          <p style={styles.paragraph}>
            If we offered a discount package and provided you with free
            accommodation with only nominal payment, and you decide to withdraw
            from participating in the conference for any reason, please note
            that refunds will not be issued. This is because arrangements have
            already been made on your behalf at the venue, and payments have
            been rendered to the hotel.
          </p>
        </section>
      </div>
      <Footer />
    </div>
  );
};

const styles = {
  container: {
    fontFamily: '"Arial", sans-serif',
    margin: "0 auto",
    maxWidth: "1200px",
    padding: "20px",
    lineHeight: "1.6",
    color: "#333",
    backgroundColor: "#f9f9f9",
    borderRadius: "10px",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
  },
  heading: {
    textAlign: "center",
    color: "#1f3e72",
    marginBottom: "20px",
  },
  subheading: {
    color: "#555",
    borderBottom: "2px solid #ddd",
    paddingBottom: "5px",
  },
  section: {
    marginBottom: "20px",
  },
  paragraph: {
    textAlign: "justify",
    marginBottom: "10px",
  },
  list: {
    paddingLeft: "20px",
    marginBottom: "10px",
  },
  link: {
    color: "blue",
    textDecoration: "none",
  },
};

export default CancellationPolicy;
