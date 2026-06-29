import PageTransition from '../../components/PageTransition'
import BottomNav from '../../components/BottomNav'

export default function RequestPage() {
  return (
    <PageTransition>
      <div className="relative mx-auto h-[844px] w-[390px] overflow-hidden bg-white">
        <div className="flex h-full items-center justify-center">
          <h1 className="text-xl font-semibold">도움 요청</h1>
        </div>

        <BottomNav />
      </div>
    </PageTransition>
  )
}
