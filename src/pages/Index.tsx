import { Button } from "@/components/ui/button";

const Index = () => {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      {/* Logo in top left */}
      <div className="p-6 md:p-8">
        <img 
          src="/cwd_logo.png" 
          alt="CWD Logo" 
          className="h-12 md:h-16 w-auto"
        />
      </div>

      {/* Centered button */}
      <div className="flex-1 flex items-center justify-center px-4">
        <Button 
          size="lg"
          className="text-lg px-8 py-6 rounded-xl hover:scale-105 transition-transform duration-200"
        >
          Start here
        </Button>
      </div>
    </div>
  );
};

export default Index;
