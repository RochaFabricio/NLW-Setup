import * as Progress from "@radix-ui/react-progress";

interface ProgressBarProps {
    progress: number
}


export function ProgressBar(props: ProgressBarProps){
    return (
        <Progress.Root 
            className="mt-4 h-3 rounded-xl bg-zinc-700  overflow-hidden" 
            aria-label="Progresso de hábitos completados nesse dia"
            aria-valuenow={props.progress}
            value={props.progress}
          >
            <Progress.Indicator
              className="h-3 rounded-xl bg-violet-600 transition-all"
              style={{ transform: `translateX(-${100 - props.progress}%)` }}
            />
          </Progress.Root>
    )
}