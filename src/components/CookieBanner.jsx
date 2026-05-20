import CookieConsent from "react-cookie-consent";

function CookieBanner() {
    return (
        <CookieConsent
            location="bottom"
            buttonText="Accept"
            declineButtonText="Decline"
            enableDeclineButton
            cookieName="kop_cookie_consent"
            style={{
                background: "#1f1f1f",
                fontSize: "14px",
            }}
            buttonStyle={{
                background: "#4caf50",
                color: "#fff",
                fontSize: "13px",
                borderRadius: "6px",
                padding: "8px 14px",
            }}
            declineButtonStyle={{
                background: "#d32f2f",
                color: "#fff",
                fontSize: "13px",
                borderRadius: "6px",
                padding: "8px 14px",
            }}
            expires={150}
        >
            This website uses cookies to improve user experience. By clicking
            “Accept”, you consent to the use of cookies in accordance with our{" "}
            <a
                href="/PRIVACY_POLICY.md"
                target="_blank"
                rel="noreferrer"
                style={{ color: "#ffd54f" }}
            >
                Privacy Policy
            </a>.
        </CookieConsent>
    );
}

export default CookieBanner;