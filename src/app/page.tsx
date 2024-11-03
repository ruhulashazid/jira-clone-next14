import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <div className="flex gsp-4">
      <Button>
        Primary
      </Button> 
      <Button variant="secondary">
      seceondery
      </Button>
      <Button variant="destructive">
        Destructive
      </Button> 
      <Button variant="ghost">
        Ghost
      </Button>
      <Button variant="outline">
        Outline
      </Button>     
      <Button variant="muted">
        Muted
      </Button>
      <Button variant="teritary">
       Teritary
      </Button>
      

    </div>
  )
}
