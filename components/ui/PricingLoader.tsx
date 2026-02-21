import { Loader2 } from "lucide-react";
const PricingLoader = () => {
  return (
        <div className="flex min-h-100 w-full items-center justify-center">
      <div className="flex flex-col items-center gap-2">
        <Loader2 className="h-8 w-8 animate-spin text-orange-600" />
        <p className="text-sm text-muted-foreground">Loading pricing...</p>
      </div>
    </div>
  )
}

export default PricingLoader