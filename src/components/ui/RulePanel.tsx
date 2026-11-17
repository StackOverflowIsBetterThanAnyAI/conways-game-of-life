const RulePanel = () => {
    return (
        <section className="rounded-lg w-full flex flex-col gap-2 bg-background-light p-4 text-sm sm:text-base">
            <h2 className="text-text text-base sm:text-lg">
                Just let it live.
            </h2>
            <p className="text-text-muted max-w-96">
                2 or 3 neighbors: a cell survives. Exactly 3 neighbors: a new
                cell is born. Otherwise, the cell dies or stays empty.
            </p>
        </section>
    )
}

export default RulePanel
