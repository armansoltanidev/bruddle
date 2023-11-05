import Button from "@/ui/Button";

export default function NotFound() {
  return (
    <div className="h-screen flex items-center justify-center flex-col gap-y-9">
      <h1 className="font-bold text-7xl">404 Not Found!</h1>
      <Button to="/app" size="lg">
        Go to App
      </Button>
    </div>
  );
}
