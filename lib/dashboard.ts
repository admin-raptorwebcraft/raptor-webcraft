export async function getDashboardData() {
    const res = await fetch("/api/dashboard", {
        cache: "no-store"
    });

    if (!res.ok) {
        throw new Error("Failed to load dashboard");
    }

    return res.json();
}