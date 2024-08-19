import { Card, ProgressCircle } from '@tremor/react';

export default function InPorgres() {
  return (
    <Card className="space-y-10  h-full">
      <div className="space-y-3">
        <p className="text-center font-mono text-sm text-slate-500">
          Progreso de aprendisaje
        </p>
        <div className="mx-auto max-w-sm">
          <div className="mx-auto flex max-w-xl flex-wrap justify-center gap-8">
            <ProgressCircle 
            value={50} 
            size="md"
            color="green"
            radius={50}
            strokeWidth={8}
            tooltip="APROBADAS: 15, EN CURSO: 5, RESTAN: 10"
             >
                <span className="text-xs font-medium text-slate-700">50%</span>
             </ProgressCircle>
            <div>
              <p className="text-center text-tremor-default text-tremor-content-strong dark:text-dark-tremor-content-strong font-medium">
                15/30
              </p>
              <p className="text-tremor-default text-tremor-content dark:text-dark-tremor-content">
                Cantidad de materias aprobadas en la carrera
              </p>
            </div>
          </div>
        </div>
      </div>
    </Card>
  );
}